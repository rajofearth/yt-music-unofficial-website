---
title: Installation
description: Install ytmusic-api and understand runtime requirements.
sidebar:
  order: 1
---

## Requirements

- Node.js 18+ recommended
- Network access to `https://music.youtube.com`

## Install

```bash
pnpm add ytmusic-api
```

You can also use npm, Yarn, or Bun:

```bash
npm install ytmusic-api
```

```bash
yarn add ytmusic-api
```

```bash
bun add ytmusic-api
```

## Import

```ts
import YTMusic from "ytmusic-api";
```

The package default export is the `YTMusic` class. Type exports are covered in the TypeScript section.
