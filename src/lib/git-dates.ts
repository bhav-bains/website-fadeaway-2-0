// Publish / modified dates from git, read at build time (Article schema on case-study pages).
// Uses first-parent history, so on `main` a merge counts as one change dated the day it was merged:
//   published = the first commit that brought the file onto this branch (launch = the merge into main)
//   modified  = the latest commit on this branch that changed it (updates on every later merge that edits it)
// On `dev` the same rule gives the dev commit dates. A file with no commits yet, or a shallow clone without
// the history, returns nothing and the dates are left out of the schema (never guessed).
import { execFileSync } from 'node:child_process';

const git = (args: string[]) =>
  execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

let shallowWarned = false;

/** YYYY-MM-DD dates for a repo-relative file path, or {} when git can't tell */
export function gitDates(file: string | undefined): { published?: string; modified?: string } {
  if (!file) return {};
  try {
    if (git(['rev-parse', '--is-shallow-repository']) === 'true' && !shallowWarned) {
      shallowWarned = true;
      console.warn('[git-dates] Shallow clone: publish dates may be missing or wrong. Fetch full history to fix.');
    }
    const dates = git(['log', '--first-parent', '--format=%cs', '--', file]).split('\n').filter(Boolean);
    return dates.length ? { published: dates.at(-1), modified: dates[0] } : {};
  } catch {
    return {};
  }
}
