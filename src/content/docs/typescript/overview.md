---
title: TypeScript Types
description: Exported types, unions, and practical narrowing patterns.
sidebar:
  order: 1
---

`ytmusic-api` exports runtime-backed TypeScript types from `src/types.ts`.

## Exported core types

- `SongDetailed`, `SongFull`
- `VideoDetailed`, `VideoFull`
- `ArtistBasic`, `ArtistDetailed`, `ArtistFull`
- `AlbumBasic`, `AlbumDetailed`, `AlbumFull`
- `PlaylistDetailed`, `PlaylistFull`
- `SearchResult`
- `HomeSection`
- `ThumbnailFull`

## Important export caveat for v5.3.0

`getUpNexts()` is declared to return `UpNextsDetails[]` in the class source, but `UpNextsDetails` is not exported from the package entrypoint (`src/index.ts`) in `v5.3.0`.

If you need to type this response in app code today, use a local interface based on observed runtime shape.

```ts
type UpNextItemRuntime = {
  type: "SONG";
  videoId: string;
  title: string;
  artists: string;
  duration: string;
  thumbnail: string;
};
```

## Working with SearchResult

`SearchResult` is a discriminated union keyed by `type`.

```ts
import type { SearchResult } from "ytmusic-api";

function label(result: SearchResult): string {
  switch (result.type) {
    case "SONG":
      return `${result.name} by ${result.artist.name}`;
    case "VIDEO":
      return `${result.name} (video)`;
    case "ALBUM":
      return `${result.name} (${result.year ?? "unknown year"})`;
    case "ARTIST":
      return result.name;
    case "PLAYLIST":
      return `${result.name} playlist`;
  }
}
```

## Nullability you should handle

- `SongDetailed.duration` can be `null`
- `SongDetailed.album` can be `null`
- `AlbumDetailed.year` can be `null`
- `getLyrics()` can return `null`

Use explicit null checks in UI and API layers.
