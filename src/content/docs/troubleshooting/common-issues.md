---
title: Common Issues
description: Troubleshooting for the most frequent integration problems.
sidebar:
  order: 1
---

## "API not initialized"

Call `await ytmusic.initialize()` before any data method.

## "Invalid videoId"

Ensure the value is a standard 11-character YouTube video ID.

## Empty or unexpected result shapes

Because data is scraped from YouTube Music, content structure can change. Add defensive parsing in your app and fallback UI handling.

## Lyrics are null

Not every track has lyrics available in the current response path. Handle `null` from `getLyrics()`.

## Playlist ID mismatch

If you provide `PL...`, playlist methods internally convert it to `VL...`. This is expected behavior.
