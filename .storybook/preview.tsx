import type { Preview } from '@storybook/nextjs-vite';
import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { SettingsProvider } from '../src/lib/contexts/settings';
import '../src/app/globals.css';

const StorybookProviders = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const checkTheme = () => {
      const htmlEl = document.documentElement;
      const currentTheme = htmlEl.classList.contains('dark') ? 'dark' : 'light';
      setTheme(currentTheme);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SettingsProvider initialSettings={{ theme: theme }}>
      {children}
    </SettingsProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },

    backgrounds: {
      disable: true,
    },
  },

  decorators: [
    (Story) => (
      <StorybookProviders>
        <Story />
      </StorybookProviders>
    ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
    }),
  ],
};

export default preview;
