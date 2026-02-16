---
title: Artist Methods
description: Load artist profile data, songs, and albums.
sidebar:
  order: 5
---

## getArtist

```ts
getArtist(artistId: string): Promise<ArtistFull>
```

Returns full artist metadata including:

- `topSongs`
- `topAlbums`
- `topSingles`
- `topVideos`
- `featuredOn`
- `similarArtists`

## getArtistSongs

```ts
getArtistSongs(artistId: string): Promise<SongDetailed[]>
```

Loads songs using a browse token flow and continuation request.

## getArtistAlbums

```ts
getArtistAlbums(artistId: string): Promise<AlbumDetailed[]>
```

Loads album list from the artist page "more" endpoint.

## Example

```ts
const artist = await ytmusic.getArtist("UCJrOtniJ0-NWz37R30urifQ");
const songs = await ytmusic.getArtistSongs(artist.artistId);
const albums = await ytmusic.getArtistAlbums(artist.artistId);
```
