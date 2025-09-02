import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from '@storybook/test';
import { Settings, User, LogOut, Moon, Sun } from 'lucide-react';
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './index';

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      description: '드롭다운을 여는 트리거 요소',
    },
    children: {
      description: '드롭다운 메뉴 내용',
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownMenuItem onClick={fn()}>
          <div className="flex items-center space-x-3">
            <User className="h-4 w-4" />
            <span>프로필</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn()}>
          <div className="flex items-center space-x-3">
            <Settings className="h-4 w-4" />
            <span>설정</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={fn()}>
          <div className="flex items-center space-x-3">
            <LogOut className="h-4 w-4" />
            <span>로그아웃</span>
          </div>
        </DropdownMenuItem>
      </>
    ),
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
        커스텀
      </button>
    ),
    children: (
      <>
        <DropdownMenuItem onClick={fn(() => 'Option 1 clicked')}>
          옵션 1
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn(() => 'Option 2 clicked')}>
          옵션 2
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn(() => 'Option 3 clicked')}>
          옵션 3
        </DropdownMenuItem>
      </>
    ),
  },
};

// 테마 토글 드롭다운
export const ThemeToggle: Story = {
  args: {
    children: (
      <>
        <div className="px-4 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
          테마
        </div>
        <DropdownMenuItem onClick={fn(() => 'Light mode clicked')}>
          <div className="flex items-center space-x-3">
            <Sun className="h-4 w-4" />
            <span>라이트 모드</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn(() => 'Dark mode clicked')}>
          <div className="flex items-center space-x-3">
            <Moon className="h-4 w-4" />
            <span>다크 모드</span>
          </div>
        </DropdownMenuItem>
      </>
    ),
  },
};

export const WithSelectedItem: Story = {
  args: {
    children: (
      <>
        <div className="px-4 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
          폰트 선택
        </div>
        <DropdownMenuItem
          onClick={fn(() => 'Korean clicked')}
          className="bg-gray-100 dark:bg-gray-700"
        >
          <div className="flex w-full items-center justify-between">
            <span>Geist</span>
            <div className="h-2 w-2 rounded-full bg-blue-600" />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn(() => 'English clicked')}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={fn(() => 'Japanese clicked')}>
          Mono
        </DropdownMenuItem>
      </>
    ),
  },
};
