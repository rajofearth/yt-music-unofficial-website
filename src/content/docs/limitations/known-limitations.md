---
title: Known Limitations
description: Constraints to keep in mind when building with ytmusic-api.
sidebar:
  order: 1
---

## Unofficial source

`ytmusic-api` is an unofficial scraper wrapper, not a Google-supported API.

## Upstream variability

YouTube Music payloads may vary by account, region, language, and platform changes.

## No built-in rate-limit management

The library does not expose first-class rate-limit controls, quota headers, or retry orchestration.

## No guaranteed data completeness

Some fields can be null or missing depending on content availability.

## Operational recommendation

Use observability, retries, and graceful fallbacks in production systems.
