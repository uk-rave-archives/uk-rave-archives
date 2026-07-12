# Phase 3.43 Test Checklist

## Existing site test
- `youtube-video-review.html`
- `youtube-set-thumbnail-test.html`
- `artist.html?id=dj-hype#year-1996`

## Importer test
1. Set `YOUTUBE_API_KEY`.
2. Run `python youtube-channel-batch-importer.py --limit 100`.
3. Confirm duplicate IDs are skipped.
4. Review `youtube-video-review.csv`.
5. Rename the generated JS file after review.
6. Upload only the reviewed `youtube-archive-data.js`.

## Scope
- No comments.
- No tracklist import.
- No `djs.html`.
- No artist-template redesign.
