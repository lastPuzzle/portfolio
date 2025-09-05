'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { setCookie, getCookie } from '../utils/cookies';
import { Settings, DEFAULT_SETTINGS, type Theme } from '@/types/settings';

interface SettingsContextType {
  settings: Settings;
  updateTheme: (theme: Theme) => void;
  toggleTheme: () => void;
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

    if (!initialSettings.theme) {
      const savedTheme = getCookie('theme');
      if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        setSettings((prev) => ({ ...prev, theme: savedTheme as Theme }));
      }
    }
  }, [initialSettings.width, initialSettings.theme]);

  useEffect(() => {
    if (mounted) {
      applyTheme(settings.theme);
      setCookie('theme', settings.theme);
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

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateTheme,
        toggleTheme,
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
