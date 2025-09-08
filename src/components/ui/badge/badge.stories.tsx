import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './index';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 variant와 size를 지원하는 뱃지 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'success',
        'warning',
        'info',
        'orange',
        'pink',
        'indigo',
        'cyan',
        'teal',
        'emerald',
        'violet',
        'rose',
        'amber',
      ],
      description: '뱃지의 색상 variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '뱃지의 크기',
    },
    children: {
      control: { type: 'text' },
      description: '뱃지에 표시될 텍스트',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
    size: 'md',
  },
};
