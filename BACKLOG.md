# Backlog

Open to-dos that are not tied to a single page. Page-level open items live in [`CLAUDE.md`](CLAUDE.md) section 10 and the page's file in `copy/`. Add a date and who decided when you add something.

---

## Analytics setup (later; founder, Nov 5)

The site currently loads GA4 and the Meta Pixel on every page and sends only `page_view` / `PageView`, plus the four Holiday-Ready Store Sprint events below. A proper analytics setup is planned as one piece of work, not page by page.

**Already sending (GA4, queued on `window.dataLayer`):**

| Event | Parameters | Sent when |
|---|---|---|
| `holiday_popup_shown` | `popup_page` | the campaign popup opens |
| `holiday_popup_closed` | `popup_page`, `method` (button, esc) | the visitor closes it |
| `holiday_popup_click` | `popup_page`, `destination` (audit, sprint) | a button in it is clicked |
| `holiday_cta_click` | `placement` (hero, final-cta, body-link), `destination` (path, or booking-call) | a campaign button or link is clicked |

**To do in the analytics setup:**
- [ ] **Register custom dimensions in GA4** (Admin, Custom definitions, scope Event): `popup_page`, `placement`, `destination`, `method`. A custom dimension is not applied to events collected before it was registered, so reports can only break the events down by these from registration onward.
- [ ] **Check the events arrive** in GA4 (DebugView or Realtime). The popup and click logic was tested in a simulated browser, not against live GA4.
- [ ] **Key events (conversions):** decide which to mark, for example `holiday_popup_click`, `holiday_cta_click` and the audit form submission (a view of `/audit-success/`).
- [ ] **Lead source on the audit form.** Since Nov 5 the form does not record where a lead came from, because UTM tags were removed from our own links (they can overwrite the real traffic source in GA4). When the setup is planned, pick an approach, for example non-UTM parameter names kept in hidden form fields, or reading the source from GA4. UTM tags stay for links from other sites (emails, ads, social).
- [ ] **A sitewide event plan:** CTA clicks, form starts and submits, outbound clicks, scroll depth, with one naming convention. Review GA4's enhanced measurement settings.
- [ ] **Meta Pixel events:** for example `Lead` on `/audit-success/` and `/contact-success/`. Today only `PageView` is sent.
- [ ] **Cookie consent:** GA4 and the Meta Pixel load for everyone with no banner (see the Privacy open item in `CLAUDE.md` section 10).

## Holiday-Ready Store Sprint close-out (after Nov 30, 2026)

- [ ] The popup stops itself after Nov 30 (Vancouver time). Remove `<CampaignPopup />` from Home, E-commerce, Build and Growth, the E-commerce body link, and the campaign files (see the "Campaign blocks" note in `CLAUDE.md` section 7).
- [ ] Decide what `/holiday-ready-store/` becomes: a "see you next season" version, noindex, or retired with a redirect. Its copy mentions November dates.
- [ ] Campaign-management scope and the 10-fix cap are still open in the offer doc.
