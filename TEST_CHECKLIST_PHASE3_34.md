# Phase 3.34 Test Checklist

## Locked-page protection
- `dj-mc-archive-v2.css` is byte-for-byte identical to Phase 3.28.
- `dj-mc-archive-v2.js` is byte-for-byte identical to Phase 3.28.
- `djs.html` retains the exact same visible text, classes, sections and image sources.
- Only six artist/profile `href` destinations changed to the shared profile template.

## Test URLs
- `artist-system-test.html`
- `artist.html?id=grooverider`
- `artist.html?id=mc-det`
- `artist.html?id=ltj-bukem`
- `artist.html?id=dj-hype`
- `artist.html?id=shy-fx`
- `artist.html?id=roni-size`
- `artist.html?id=fabio` must show “Profile not published.”

## Batch rule
A record cannot publish without:
- real image
- image credit/source
- role and name
- summary
- at least one biography paragraph
