export type Theme = 'light' | 'dark';

export type FontFamily = 'noto' | 'nanum';

export type LayoutWidth = 'narrow' | 'wide';

export interface Settings {
  theme: Theme;
}

export const DEFAULT_SETTINGS: Settings = {
  theme: 'light',
};
