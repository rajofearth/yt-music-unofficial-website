---
title: Search Methods
description: Query YouTube Music content with global and filtered search methods.
sidebar:
  order: 2
---

## getSearchSuggestions

**Signature**

```ts
getSearchSuggestions(query: string): Promise<string[]>
```

Returns autocomplete suggestion strings for user input.

## search

**Signature**

```ts
search(query: string): Promise<SearchResult[]>
```

Returns a mixed list of result types (`SONG`, `VIDEO`, `ALBUM`, `ARTIST`, `PLAYLIST`).

## Filtered search methods

```ts
searchSongs(query: string): Promise<SongDetailed[]>
searchVideos(query: string): Promise<VideoDetailed[]>
searchArtists(query: string): Promise<ArtistDetailed[]>
searchAlbums(query: string): Promise<AlbumDetailed[]>
searchPlaylists(query: string): Promise<PlaylistDetailed[]>
```

These methods use YouTube Music filter params internally and return typed arrays.

## Example

```ts
const mixed = await ytmusic.search("Weeknd");
const songs = await ytmusic.searchSongs("Weeknd");
const artists = await ytmusic.searchArtists("Weeknd");
```

## Notes

- Always call `initialize()` first.
- Search results can vary over time because the source is scraped live from YouTube Music.
