import type { Meta, StoryObj } from '@storybook/react';

import { Default as Navigation } from 'src/components/Navigation';

const meta = {
  title: 'Example/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Navigation',
      params: {
        RenderingIdentifier: 'NavigationRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
