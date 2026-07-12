# Phase 3.42 — YouTube Sets and Thumbnails

## Scope
- Comment parsing and full track lists are excluded.
- No change to `djs.html`.
- Existing artist museum layout is unchanged.

## Video information displayed
- Official YouTube thumbnail
- Video title
- Year
- DJ or artists credited by the video
- Event or release name
- Exact date where already present
- Set/mix/radio relationship
- Source channel
- Play-in-page and open-on-YouTube controls

## Thumbnail behaviour
The page tries:
1. maxresdefault.jpg
2. hqdefault.jpg
3. mqdefault.jpg
4. default.jpg

## Test
- `youtube-set-thumbnail-test.html`
- `artist.html?id=dj-hype#year-1996`
- `artist.html?id=shy-fx#year-1996`
- `youtube-archive-test.html`
