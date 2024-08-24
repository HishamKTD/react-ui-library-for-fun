import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'EchoBladeUI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: {
    onChange: action('change'),
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    // Default args for your story
  },
};
