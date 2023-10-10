import type { Meta, StoryObj } from '@storybook/react';

import { Default as RowSplitter } from 'src/components/RowSplitter';

const meta = {
  title: 'Example/RowSplitter',
  component: RowSplitter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RowSplitter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'RowSplitter',
      params: {
        RenderingIdentifier: 'RowSplitterRenderingIdentifier',
      },
    },
    params: {
      styles: '',
      EnabledPlaceholders: 'placeholder1,placeholder2',
    },
  },
};
