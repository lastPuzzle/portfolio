export type Theme = 'light' | 'dark';

export type FontFamily = 'geist' | 'system' | 'mono';

export type LayoutWidth = 'narrow' | 'wide';

export interface Settings {
  theme: Theme;
  font: FontFamily;
  width: LayoutWidth;
}

export const FONT_LABELS: Record<FontFamily, string> = {
  geist: 'Geist Sans',
  system: 'System',
  mono: 'Geist Mono',
};

export const FONT_CLASSES: Record<FontFamily, string> = {
  geist: 'font-geist-sans',
  system: 'font-system',
  mono: 'font-geist-mono',
};

export const LAYOUT_WIDTH_LABELS: Record<LayoutWidth, string> = {
  narrow: '좁게',
  wide: '넓게',
};

export const LAYOUT_WIDTH_CLASSES: Record<LayoutWidth, string> = {
  narrow: 'max-w-3xl',
  wide: 'max-w-none',
};

export const DEFAULT_SETTINGS: Settings = {
  theme: 'light',
  font: 'geist',
  width: 'narrow',
};
