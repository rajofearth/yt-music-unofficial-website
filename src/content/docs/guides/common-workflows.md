---
title: Common Workflows
description: Practical end-to-end flows built from the public API.
sidebar:
  order: 1
---

## Search -> song details -> lyrics

```ts
const songs = await ytmusic.searchSongs("joji slow dancing in the dark");
if (songs.length === 0) return;

const song = await ytmusic.getSong(songs[0].videoId);
const lyrics = await ytmusic.getLyrics(song.videoId);
```

## Artist -> catalog

```ts
const artist = await ytmusic.getArtist("UC...");
const topSongs = artist.topSongs;
const albums = await ytmusic.getArtistAlbums(artist.artistId);
```

## Playlist -> all videos

```ts
const playlist = await ytmusic.getPlaylist("PL...");
const videos = await ytmusic.getPlaylistVideos(playlist.playlistId);
```

`getPlaylistVideos()` fetches continuation pages internally until complete.
