---
title: Error Handling
description: Handle validation and runtime errors safely in production integrations.
sidebar:
  order: 2
---

## Common error cases

- API used before initialization:
  - `Error("API not initialized. Make sure to call the initialize() method first")`
- Invalid video IDs in `getSong`, `getVideo`, `getLyrics`, `getUpNexts`:
  - `Error("Invalid videoId")`
- Missing expected structure for `getUpNexts`:
  - `Error("Invalid response structure")`

## Recommended pattern

```ts
try {
  await ytmusic.initialize();
  const song = await ytmusic.getSong(videoId);
  return { ok: true, song };
} catch (error) {
  const message = error instanceof Error ? error.message : "Unknown error";
  return { ok: false, message };
}
```

## Defensive checks

- Verify arrays before indexing
- Treat nullable fields as optional
- Handle empty results from search endpoints
