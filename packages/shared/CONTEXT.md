# packages/shared — Context

## What is this?

The `@fastdeck/shared` workspace is the **cross-platform shared library** — TypeScript types, constants, and pure utility functions consumed by every other workspace in the monorepo (web, desktop, mobile).

No platform-specific code lives here. Everything must be consumable by Node.js (Electron main), a browser bundler (Vite), and React Native (Metro).

---

## Responsibilities

| Responsibility | Details |
|---------------|---------|
| **Action types** | Canonical `ActionType` enum and `Action` payload interfaces |
| **Plugin interfaces** | `FastDeckPlugin` contract that all plugins must implement |
| **Grid types** | `GridLayout`, `GridCell`, `DeckProfile` interfaces |
| **gRPC message types** | Re-exports from `@fastdeck/proto` (or mirrors) for convenience |
| **App constants** | `APP_NAME`, `APP_VERSION`, `DEFAULT_PORT`, `BREAKPOINTS` |
| **Utility functions** | Pure functions: grid math, action validation, type guards |

---

## Folder Structure

```
packages/shared/
│
├── package.json                  # @fastdeck/shared — no runtime deps
├── tsconfig.json                 # Extends ../../tsconfig.base.json
├── CONTEXT.md                    # ← You are here
│
└── src/
    ├── index.ts                  # Barrel: re-exports everything public
    │
    ├── constants.ts              # APP_NAME, APP_VERSION, DEFAULT_GRPC_PORT
    │
    ├── types/
    │   ├── action.ts             # ActionType enum + Action union type
    │   ├── grid.ts               # GridLayout, GridCell, DeckProfile
    │   ├── plugin.ts             # FastDeckPlugin interface
    │   └── platform.ts           # Platform type, AppConfig
    │
    └── utils/
        ├── grid.ts               # cellIndex(row, col, cols), gridDimensions()
        ├── action.ts             # isMultiAction(), validateAction()
        └── typeGuards.ts         # isSingleAction(), isDeckProfile(), etc.
```

---

## Action Type System

```typescript
// types/action.ts

export enum ActionType {
  // Single Actions
  CREATE_FOLDER  = 'CREATE_FOLDER',
  RUN_SCRIPT     = 'RUN_SCRIPT',
  RUN_COMMAND    = 'RUN_COMMAND',
  LAUNCH_APP     = 'LAUNCH_APP',
  OPEN_URL       = 'OPEN_URL',
  MEDIA_CONTROL  = 'MEDIA_CONTROL',
  KEY_BINDING    = 'KEY_BINDING',
  // Multi Action
  MULTI          = 'MULTI',
}

export interface BaseAction {
  id: string;
  type: ActionType;
  label: string;
  icon?: string;
}

export interface RunCommandAction extends BaseAction {
  type: ActionType.RUN_COMMAND;
  command: string;
  cwd?: string;
}

export interface MultiAction extends BaseAction {
  type: ActionType.MULTI;
  steps: SingleAction[];
  stepDelayMs?: number;
}

export type SingleAction =
  | RunCommandAction
  | RunScriptAction
  | LaunchAppAction
  | OpenUrlAction
  | MediaControlAction
  | KeyBindingAction
  | CreateFolderAction;

export type Action = SingleAction | MultiAction;
```

---

## Grid Type System

```typescript
// types/grid.ts

export interface GridCell {
  id: string;
  row: number;
  col: number;
  action?: Action;
  label: string;
  icon?: string;
  backgroundColor?: string;
}

export interface GridLayout {
  rows: number;
  cols: number;
  cells: GridCell[];
}

export interface DeckProfile {
  id: string;
  name: string;
  layout: GridLayout;
  createdAt: string;
  updatedAt: string;
}
```

---

## Plugin Interface

```typescript
// types/plugin.ts

export interface PluginActionDefinition {
  type: string;           // Unique action type string (e.g. 'VSCODE_OPEN_FILE')
  label: string;
  execute: (payload: unknown) => Promise<void>;
}

export interface FastDeckPlugin {
  id: string;
  name: string;
  version: string;
  description?: string;
  actions: PluginActionDefinition[];
}
```

---

## Rules

- ❌ No `import` from `electron`, `react-native`, or any platform-specific package
- ❌ No DOM APIs (`window`, `document`)
- ❌ No Node.js built-ins (`fs`, `path`, `child_process`)
- ✅ Only pure TypeScript, generic utilities, and types
