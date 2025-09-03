export type Theme = 'light' | 'dark';

export type FontFamily = 'noto' | 'nanum';

export type LayoutWidth = 'narrow' | 'wide';

export interface Settings {
  theme: Theme;
  font: FontFamily;
  width: LayoutWidth;
}

export const FONT_LABELS: Record<FontFamily, string> = {
  noto: 'Noto Sans KR',
  nanum: 'Nanum Gothic',
};

export const FONT_CLASSES: Record<FontFamily, string> = {
  noto: 'font-noto-sans-kr',
  nanum: 'font-nanum-gothic',
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
  font: 'noto',
  width: 'narrow',
};
