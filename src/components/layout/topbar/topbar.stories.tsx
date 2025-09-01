import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Moon, Sun, Type } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../../ui/dropdown-menu';

// 스토리북 전용 Topbar 컴포넌트 (실제 Provider 없이)
const StorybookTopbar = ({
  initialTheme = 'light',
  initialFont = 'geist',
}: {
  initialTheme?: 'light' | 'dark';
  initialFont?: 'geist' | 'system' | 'mono';
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);
  const [font, setFont] = useState<'geist' | 'system' | 'mono'>(initialFont);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleFontChange = (newFont: 'geist' | 'system' | 'mono') => {
    setFont(newFont);
  };

  const FONT_LABELS = {
    geist: 'Geist Sans',
    system: 'System',
    mono: 'Geist Mono',
  } as const;

  const FONT_CLASSES = {
    geist: 'font-geist-sans',
    system: 'font-system',
    mono: 'font-geist-mono',
  } as const;

  return (
    <div className={`${theme} ${FONT_CLASSES[font]}`}>
      <div className="w-full">
        <div className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-900">
          <div className="ml-auto flex items-center space-x-4">
            <DropdownMenu>
              <div className="px-4 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                테마
              </div>
              <DropdownMenuItem onClick={toggleTheme}>
                <div className="flex items-center space-x-3">
                  {theme === 'light' ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                  <span>{theme === 'light' ? '다크 모드' : '라이트 모드'}</span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <div className="px-4 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                폰트
              </div>
              {Object.entries(FONT_LABELS).map(([fontKey, label]) => (
                <DropdownMenuItem
                  key={fontKey}
                  onClick={() =>
                    handleFontChange(fontKey as 'geist' | 'system' | 'mono')
                  }
                  className={
                    font === fontKey ? 'bg-gray-100 dark:bg-gray-700' : ''
                  }
                >
                  <div className="flex items-center space-x-3">
                    <Type className="h-3 w-3" />
                    <span>{label}</span>
                    {font === fontKey && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-blue-600" />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Layout/Topbar',
  component: StorybookTopbar,
  parameters: {
    layout: 'fullscreen',
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
    initialFont: {
      control: { type: 'select' },
      options: ['geist', 'system', 'mono'],
      description: '초기 폰트 설정',
    },
  },
} satisfies Meta<typeof StorybookTopbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {
    initialTheme: 'light',
    initialFont: 'geist',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkMode: Story = {
  args: {
    initialTheme: 'dark',
    initialFont: 'geist',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
