# Issue tracker: single tasks file

Tasks for this repo live as one flat checklist: `tasks/TASKS.md`. Not
GitHub Issues — that was tried and deliberately dropped.

This deviates from `setup-matt-pocock-skills`'s own default "local markdown"
template, which prescribes one file per ticket under
`.scratch/<feature>/issues/`. That's intentional here: the user wants a
single running list they can scan at a glance, matching a pattern from
another of their projects, not a per-ticket file tree.

## Conventions

- All tasks live in `tasks/TASKS.md`, grouped under headings by area
  (Database, Admin panel, Public site, Waiting on the org, Pre-launch).
- Each task is a markdown checkbox: `- [ ] ...` / `- [x] ...`.
- Update checkboxes as you go, not in a batch at the end of a session.
- No separate ticket numbers, labels, or assignees — this is a solo/small
  project, and the flat list is the whole point.

## When a skill says "publish to the issue tracker"

Add a new checkbox item under the relevant heading in `tasks/TASKS.md`
(create the heading if none fits).

## When a skill says "fetch the relevant ticket"

Read `tasks/TASKS.md` and find the matching line.
