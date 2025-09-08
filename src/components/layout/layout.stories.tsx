import type { Meta, StoryObj } from '@storybook/react-vite';
import Layout from './layout';

const meta = {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        iframeHeight: 600,
      },
    },
    nextjs: {
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="space-y-6"></div>,
    showBackButton: false,
  },
};
