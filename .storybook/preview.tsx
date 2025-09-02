import type { Preview } from '@storybook/nextjs-vite';
import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { ThemeProvider } from '../src/lib/contexts/theme';
import { FontProvider } from '../src/lib/contexts/font';
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
    <ThemeProvider key={theme} initialTheme={theme}>
      <FontProvider initialFont="geist">{children}</FontProvider>
    </ThemeProvider>
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
      disable: true, // themes 애드온을 사용하므로 기본 backgrounds 비활성화
    },
  },

  decorators: [
    // Providers 먼저 적용
    (Story) => (
      <StorybookProviders>
        <Story />
      </StorybookProviders>
    ),
    // 그 다음 themes 애드온 적용
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html', // html 요소에 클래스 적용
    }),
  ],
};

export default preview;
