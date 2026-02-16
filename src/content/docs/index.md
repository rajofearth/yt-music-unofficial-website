---
title: ytmusic-api Documentation
description: Official documentation for ytmusic-api, a type-safe YouTube Music API wrapper.
---

`ytmusic-api` is an unofficial, type-safe YouTube Music API wrapper for Node.js and TypeScript.

Use these docs to:

- install and initialize the client
- understand every public method and return type
- build robust integrations with safe error handling

## Quick start

```ts
import YTMusic from "ytmusic-api";

const ytmusic = new YTMusic();
await ytmusic.initialize();

const songs = await ytmusic.searchSongs("Never Gonna Give You Up");
console.log(songs[0]);
```

## Documentation map

- **Getting Started**: installation, initialization, and first calls
- **API Reference**: complete method-by-method reference
- **TypeScript**: exported types and narrowing patterns
- **Guides**: practical workflows and reliability patterns
- **Troubleshooting**: common runtime issues and fixes
- **Limitations**: known constraints from current implementation
