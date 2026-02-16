---
title: Reliability Best Practices
description: Build resilient ytmusic-api integrations for production environments.
sidebar:
  order: 3
---

## Initialize once per process

Create a shared `YTMusic` instance and initialize it before request handling.

## Add retry wrappers at the app layer

The library does not include built-in retry/backoff controls. Add retries for transient network failures in your own service layer.

## Pace requests

Avoid bursty traffic against YouTube Music endpoints. Batch and queue high-volume jobs where possible.

## Respect nullable and variable data

YouTube metadata can be inconsistent. Treat optional and nullable fields as first-class cases.

## Cache where it helps

For read-heavy workloads (search or repeated lookups), cache responses with a short TTL in your app.
