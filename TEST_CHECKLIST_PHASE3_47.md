# Phase 3.47 — Older Archive Migration

This build scans the older site files already present in the project.

## Imported
- DJ and MC names from old People/DJ indexes
- spelling aliases and duplicate-name cleanup
- direct Internet Archive MP3 links found in older pack/event pages
- artist-to-tape-pack links
- existing current artist and tape-pack data preserved

## Publication rule
Imported names are staged, not made public automatically. They need a verified
photo and usable profile data before appearing as public profiles.

## Test
- `legacy-migration-test.html`
- `packs.html?pack=helter-skelter-milwaukees-1991`
- inspect `legacy-artist-review.csv`
- inspect `legacy-set-review.csv`

No approved page design has been changed.
