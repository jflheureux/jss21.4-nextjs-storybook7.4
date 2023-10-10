import type { Meta, StoryObj } from '@storybook/react';

import { Default as ContentBlock } from 'src/components/ContentBlock';

const meta = {
  title: 'Example/ContentBlock',
  component: ContentBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ContentBlock',
      params: {
        RenderingIdentifier: 'ContentBlockRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
