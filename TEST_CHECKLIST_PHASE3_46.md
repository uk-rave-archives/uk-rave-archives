# Phase 3.46 — Tape Pack Intake

## Test
- `tape-pack-intake-test.html`
- `packs.html?pack=helter-skelter-milwaukees-1991`
- `packs.html?pack=the-edge-happy-hardcore-vol-3`
- `packs.html?pack=united-dance-volume-5`

## Rules
- Cassette playback appears only for verified direct audio files.
- YouTube transfers appear separately with thumbnails.
- A thumbnail is not treated as a verified tape-pack cover scan.
- Metadata-only records remain visible but do not pretend to be playable.
- Future Internet Archive items are imported to a review CSV first.

## Pull more from Internet Archive
```bash
python internet-archive-tape-importer.py helter-skelter-tape-packs
```
Review `internet-archive-tape-review.csv`, then add approved rows to
`tape-packs-data.js`.
