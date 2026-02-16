---
title: Playlist Methods
description: Fetch playlist metadata and paginate through playlist videos.
sidebar:
  order: 7
---

## getPlaylist

```ts
getPlaylist(playlistId: string): Promise<PlaylistFull>
```

Returns playlist metadata (without track list).

Behavior note:

- If `playlistId` starts with `PL`, the client converts it to `VL` before calling browse APIs.

## getPlaylistVideos

```ts
getPlaylistVideos(playlistId: string): Promise<VideoDetailed[]>
```

Returns playlist items and follows continuation tokens until exhausted.

Behavior notes:

- applies the same `PL` to `VL` conversion
- handles continuation tokens where the parser may return array or scalar token

## Example

```ts
const info = await ytmusic.getPlaylist("PL123...");
const videos = await ytmusic.getPlaylistVideos(info.playlistId);
```
