# FastDeck Tools

A **Yarn Workspaces monorepo** powering the FastDeck suite of applications.

## Workspaces

| Workspace | Path | Description |
|-----------|------|-------------|
| `@fastdeck/web` | `apps/web` | React web application (Vite) |
| `@fastdeck/desktop` | `apps/desktop` | Electron.js desktop application |
| `@fastdeck/mobile` | `apps/mobile` | React Native mobile application |
| `@fastdeck/shared` | `packages/shared` | Shared types, utilities, and constants |

## Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **Yarn** Classic (v1)

### Installation

```bash
yarn install
```

### Development

```bash
# Web app
yarn dev:web

# Desktop app (coming soon)
yarn dev:desktop

# Mobile app (coming soon)
yarn dev:mobile
```

### Build

```bash
# Web app
yarn build:web
```

## Project Structure

```
tools/
├── apps/
│   ├── web/          # React + Vite web app
│   ├── desktop/      # Electron.js desktop app (planned)
│   └── mobile/       # React Native mobile app (planned)
├── packages/
│   └── shared/       # Shared code across all apps
├── package.json      # Root workspace configuration
└── tsconfig.base.json
```

## License

[MIT](LICENSE)
