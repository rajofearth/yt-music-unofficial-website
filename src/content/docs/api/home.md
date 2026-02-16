---
title: Home Methods
description: Retrieve structured home page sections from YouTube Music.
sidebar:
  order: 8
---

## getHomeSections

```ts
getHomeSections(): Promise<HomeSection[]>
```

Returns home feed sections. Each section contains a title and mixed content:

- `AlbumDetailed`
- `PlaylistDetailed`
- `SongDetailed`

## Example

```ts
const sections = await ytmusic.getHomeSections();
for (const section of sections) {
  console.log(section.title, section.contents.length);
}
```

## Notes

- The method requests the home browse endpoint and paginates continuation sections.
- The returned structure is intended for feed-style use cases.
