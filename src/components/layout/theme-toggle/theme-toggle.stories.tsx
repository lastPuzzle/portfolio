import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const StorybookThemeToggle = ({
  initialTheme = 'light',
}: {
  initialTheme?: 'light' | 'dark';
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <div className="p-4">
        <button
          onClick={toggleTheme}
          className="theme-toggle cursor-pointer rounded-lg bg-gray-100 p-2 transition-all duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label={
            theme === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'
          }
        >
          <span className="block transition-transform duration-300">
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

const meta = {
  title: 'Layout/ThemeToggle',
  component: StorybookThemeToggle,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    initialTheme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: '초기 테마 설정',
    },
  },
} satisfies Meta<typeof StorybookThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {
    initialTheme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkMode: Story = {
  args: {
    initialTheme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
