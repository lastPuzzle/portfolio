import type { Meta, StoryObj } from '@storybook/react-vite';
import { Topbar } from './index';

const meta = {
  title: 'Layout/Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
