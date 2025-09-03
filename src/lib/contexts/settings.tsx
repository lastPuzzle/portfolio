'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { setCookie } from '../utils/cookies';
import {
  Settings,
  DEFAULT_SETTINGS,
  type Theme,
  type LayoutWidth,
} from '@/types/settings';

interface SettingsContextType {
  settings: Settings;
  updateTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  updateWidth: (width: LayoutWidth) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(theme);
}

interface SettingsProviderProps {
  children: React.ReactNode;
  initialSettings?: Partial<Settings>;
}

export function SettingsProvider({
  children,
  initialSettings = {},
}: SettingsProviderProps) {
  const [settings, setSettings] = useState<Settings>({
    ...DEFAULT_SETTINGS,
    ...initialSettings,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedWidth = localStorage.getItem('portfolio-layout-width');
    if (savedWidth && ['narrow', 'wide'].includes(savedWidth)) {
      setSettings((prev) => ({ ...prev, width: savedWidth as LayoutWidth }));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      applyTheme(settings.theme);
      setCookie('theme', settings.theme);
      localStorage.setItem('portfolio-layout-width', settings.width);
    }
  }, [settings, mounted]);

  const updateTheme = (theme: Theme) => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const toggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }));
  };

  const updateWidth = (width: LayoutWidth) => {
    setSettings((prev) => ({ ...prev, width }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateTheme,
        toggleTheme,
        updateWidth,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings는 SettingsProvider 내에서 사용해야 합니다.');
  }
  return context;
}

export function useTheme() {
  const { settings, updateTheme, toggleTheme } = useSettings();
  return {
    theme: settings.theme,
    setTheme: updateTheme,
    toggleTheme,
  };
}

// useFont 제거됨 - 폰트는 고정

export function useLayout() {
  const { settings, updateWidth } = useSettings();
  return {
    width: settings.width,
    setWidth: updateWidth,
  };
}
