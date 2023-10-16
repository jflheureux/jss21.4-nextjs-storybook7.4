import type { Meta, StoryObj } from '@storybook/react';

import { Default as RichText } from 'src/components/RichText';

const meta = {
  title: 'src/components/RichText',
  component: RichText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'RichText',
      params: {
        RenderingIdentifier: 'RichTextRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
