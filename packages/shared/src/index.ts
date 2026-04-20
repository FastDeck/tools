/**
 * @fastdeck/shared
 *
 * Shared types, utilities, and constants used across all FastDeck applications.
 */

// ─── App Metadata ────────────────────────────────────────────────
export const APP_NAME = 'FastDeck';
export const APP_VERSION = '0.1.0';

// ─── Platform Types ──────────────────────────────────────────────
export type Platform = 'web' | 'desktop' | 'mobile';

export interface AppConfig {
  name: string;
  version: string;
  platform: Platform;
}

// ─── Utility Types ───────────────────────────────────────────────
/** Makes specific keys of T optional */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** Extracts the resolved type from a Promise */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

// ─── Constants ───────────────────────────────────────────────────
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
