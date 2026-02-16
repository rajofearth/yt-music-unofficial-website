---
title: Song Methods
description: Fetch full song details, lyrics, and up-next recommendations.
sidebar:
  order: 3
---

## getSong

```ts
getSong(videoId: string): Promise<SongFull>
```

Fetches full song information, including stream `formats` and `adaptiveFormats`.

Validation:

- `videoId` must match `^[a-zA-Z0-9-_]{11}$`
- Throws `Error("Invalid videoId")` when invalid or mismatch after parsing

## getLyrics

```ts
getLyrics(videoId: string): Promise<string[] | null>
```

Returns lyrics lines as an array of strings or `null` if not available.

Validation:

- same `videoId` validation as `getSong`

## getUpNexts

```ts
getUpNexts(videoId: string): Promise<UpNextsDetails[]>
```

Fetches recommended up-next tracks for a song context.

Current source caveat for `v5.3.0`:

- the method signature points to `UpNextsDetails[]`
- runtime objects currently include keys like `title`, `artists` (string), `duration` (string), and `thumbnail` (string URL)
- this differs from the `UpNextsDetails` schema in `src/types.ts`

Validation:

- same `videoId` validation
- throws when expected response structure is missing

## Example

```ts
const song = await ytmusic.getSong("dQw4w9WgXcQ");
const lyrics = await ytmusic.getLyrics(song.videoId);
const upNext = await ytmusic.getUpNexts(song.videoId);
```
