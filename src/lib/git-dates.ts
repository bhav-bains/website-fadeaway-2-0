// Publish / modified dates from git, read at build time. Every date on the site comes from here (CLAUDE.md section 4);
// never hand-type a date or use the build time. Pages get their dates through page-dates.ts.
// Uses first-parent history, so on `main` a merge counts as one change dated the day it was merged:
//   published = the first commit that brought the file(s) onto this branch (launch = the merge into main)
//   modified  = the latest commit on this branch that changed any of them (updates on every later merge)
// On `dev` the same rule gives the dev commit dates. Files with no commits yet, or a shallow clone without
// the history, return nothing and the dates are left out (never guessed).
import { execFileSync } from 'node:child_process';

// --literal-pathspecs: "[slug].astro" is a file name, not a glob
const git = (args: string[]) =>
  execFileSync('git', ['--literal-pathspecs', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

let shallowChecked = false;
const cache = new Map<string, { published?: string; modified?: string }>();

/**
 * Dates for one or more repo-relative file paths as UTC ISO 8601 timestamps (2026-10-03T21:35:02.000Z), or {} when
 * git can't tell. UTC ISO is exactly what @astrojs/sitemap writes for <lastmod>, so sitemap and JSON-LD strings match.
 */
export function gitDates(files: string | string[] | undefined): { published?: string; modified?: string } {
  const list = (Array.isArray(files) ? files : [files]).filter((f): f is string => !!f);
  if (!list.length) return {};
  const key = list.join('\n');
  const hit = cache.get(key);
  if (hit) return hit;
  let result: { published?: string; modified?: string } = {};
  try {
    if (!shallowChecked) {
      shallowChecked = true;
      if (git(['rev-parse', '--is-shallow-repository']) === 'true') {
        console.warn('[git-dates] Shallow clone: page dates may be missing or wrong. Fetch full history to fix.');
      }
    }
    const dates = git(['log', '--first-parent', '--format=%cI', '--', ...list])
      .split('\n')
      .filter(Boolean)
      .map((d) => new Date(d).toISOString());
    if (dates.length) result = { published: dates.at(-1), modified: dates[0] };
  } catch {
    // not a git checkout: no dates
  }
  cache.set(key, result);
  return result;
}
