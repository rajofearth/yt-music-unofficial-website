---
title: Album Methods
description: Fetch complete album metadata and track listing.
sidebar:
  order: 6
---

## getAlbum

```ts
getAlbum(albumId: string): Promise<AlbumFull>
```

Returns album details and `songs` with structured metadata.

## Example

```ts
const album = await ytmusic.getAlbum("MPREb_...");
console.log(album.name, album.songs.length);
```

## Notes

- `albumId` is passed to a browse endpoint as `browseId`.
- `year` can be `null` depending on source metadata.
