---
title: API Overview
description: Public API surface of the YTMusic class.
sidebar:
  order: 1
---

All methods are instance methods on `YTMusic`.

**Docs target version:** `ytmusic-api v5.3.0`

```ts
const ytmusic = new YTMusic();
await ytmusic.initialize();
```

## Initialization

- `initialize(options?: { cookies?: string; GL?: string; HL?: string }): Promise<YTMusic>`

## Search

- `getSearchSuggestions(query: string): Promise<string[]>`
- `search(query: string): Promise<SearchResult[]>`
- `searchSongs(query: string): Promise<SongDetailed[]>`
- `searchVideos(query: string): Promise<VideoDetailed[]>`
- `searchArtists(query: string): Promise<ArtistDetailed[]>`
- `searchAlbums(query: string): Promise<AlbumDetailed[]>`
- `searchPlaylists(query: string): Promise<PlaylistDetailed[]>`

## Song and video

- `getSong(videoId: string): Promise<SongFull>`
- `getUpNexts(videoId: string): Promise<UpNextsDetails[]>`
- `getVideo(videoId: string): Promise<VideoFull>`
- `getLyrics(videoId: string): Promise<string[] | null>`

## Artist, album, playlist, home

- `getArtist(artistId: string): Promise<ArtistFull>`
- `getArtistSongs(artistId: string): Promise<SongDetailed[]>`
- `getArtistAlbums(artistId: string): Promise<AlbumDetailed[]>`
- `getAlbum(albumId: string): Promise<AlbumFull>`
- `getPlaylist(playlistId: string): Promise<PlaylistFull>`
- `getPlaylistVideos(playlistId: string): Promise<VideoDetailed[]>`
- `getHomeSections(): Promise<HomeSection[]>`
