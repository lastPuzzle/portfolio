'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { setCookie } from '../utils/cookies';

type FontFamily = 'geist' | 'system' | 'mono';

interface FontContextType {
  font: FontFamily;
  setFont: (font: FontFamily) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

const FONT_CLASSES = {
  geist: 'font-geist-sans',
  system: 'font-system',
  mono: 'font-geist-mono',
} as const;

const FONT_LABELS = {
  geist: 'Geist Sans',
  system: 'System',
  mono: 'Geist Mono',
} as const;

function applyFont(font: FontFamily) {
  const html = document.documentElement;

  Object.values(FONT_CLASSES).forEach((className) => {
    html.classList.remove(className);
  });

  html.classList.add(FONT_CLASSES[font]);
}

interface FontProviderProps {
  children: React.ReactNode;
  initialFont: FontFamily;
}

export function FontProvider({ children, initialFont }: FontProviderProps) {
  const [font, setFontState] = useState<FontFamily>(initialFont);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      applyFont(font);
      setCookie('font', font);
    }
  }, [font, mounted]);

  const setFont = (newFont: FontFamily) => {
    setFontState(newFont);
  };

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error('useFont는 FontProvider 내에서 사용해야 합니다.');
  }
  return context;
}

export { FONT_LABELS, type FontFamily };
