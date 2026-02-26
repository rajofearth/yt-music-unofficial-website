# ytmusic-api Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![Type-Safe API](https://img.shields.io/badge/API-Type--Safe-blue)](https://github.com/ytmusic-api/ytmusic-api)

This repository contains the source code for the documentation of `ytmusic-api`, an unofficial, type-safe YouTube Music API wrapper for Node.js and TypeScript.

The live documentation is built using [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## 🚀 Getting Started

To run the documentation site locally:

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Start the development server:**
    ```bash
    pnpm dev
    ```
    The site will be available at `http://localhost:4321`.

3.  **Build for production:**
    ```bash
    pnpm build
    ```

## 📁 Project Structure

- `src/content/docs/`: Contains the Markdown files for the documentation.
  - `api/`: Reference for all public methods (songs, artists, albums, etc.).
  - `getting-started/`: Installation and quick-start guides.
  - `guides/`: Practical workflows and best practices.
  - `typescript/`: Documentation for exported types and patterns.
- `public/`: Static assets.

## 📝 Documentation Target

These docs currently target **`ytmusic-api v5.3.0`**.

If you notice any inaccuracies or would like to add new examples, feel free to open a Pull Request!

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs dependencies |
| `pnpm dev` | Starts local dev server at `localhost:4321` |
| `pnpm build` | Build the production site to `./dist/` |
| `pnpm preview` | Preview the build locally |
| `pnpm astro ...` | Run Astro CLI commands |

## ⚖️ License

This documentation is licensed under the MIT License.
