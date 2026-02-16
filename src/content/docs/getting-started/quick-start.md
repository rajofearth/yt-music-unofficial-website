---
title: Quick Start
description: Initialize the client and make your first API calls.
sidebar:
  order: 2
---

## Initialize before calling any method

`initialize()` is required. Calling API methods first will throw an error.

```ts
import YTMusic from "ytmusic-api";

const ytmusic = new YTMusic();
await ytmusic.initialize();
```

## Optional initialization options

```ts
await ytmusic.initialize({
  cookies: "VISITOR_INFO1_LIVE=...; PREF=...",
  GL: "US",
  HL: "en",
});
```

- `cookies`: custom cookie string split by `"; "`
- `GL`: region code used in requests
- `HL`: language code used in requests

## First useful queries

```ts
const suggestions = await ytmusic.getSearchSuggestions("daft punk");
const songs = await ytmusic.searchSongs("daft punk one more time");
const song = await ytmusic.getSong(songs[0].videoId);
const lyrics = await ytmusic.getLyrics(song.videoId);
```

## Runtime validation notes

- Video IDs are validated by methods that accept a `videoId`.
- Invalid IDs throw `Error("Invalid videoId")`.
- Some methods may return `null` for optional data (for example lyrics).
