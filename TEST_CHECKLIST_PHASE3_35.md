# Phase 3.35 Test Checklist

## Locked page
- `djs.html`, `dj-mc-archive-v2.css`, and `dj-mc-archive-v2.js` are unchanged from Phase 3.34.
- No visible DJ & MC page layout changes.

## Batch test
- Open `artist-batch-test.html`.
- It must report 100 records, 6 public test profiles, 94 staged records, and zero blocking errors.
- Search and role/status filters must work.

## Profile tests
- `artist.html?id=grooverider`
- `artist.html?id=mc-det`
- `artist.html?id=dj-hype`
- `artist.html?id=fabio` must remain unpublished.

## Publication gate
No staged record appears publicly until it has a genuine image, credit, summary, biography and valid role/name/id.
