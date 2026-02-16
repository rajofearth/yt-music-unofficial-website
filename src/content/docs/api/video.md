---
title: Video Methods
description: Retrieve full video metadata by YouTube video ID.
sidebar:
  order: 4
---

## getVideo

```ts
getVideo(videoId: string): Promise<VideoFull>
```

Returns detailed video metadata, including:

- `unlisted`
- `familySafe`
- `paid`
- `tags`

Validation:

- `videoId` must match `^[a-zA-Z0-9-_]{11}$`
- throws `Error("Invalid videoId")` if invalid

## Example

```ts
const video = await ytmusic.getVideo("dQw4w9WgXcQ");
console.log(video.tags);
```
