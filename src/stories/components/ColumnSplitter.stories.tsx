import type { Meta, StoryObj } from '@storybook/react';

import { Default as ColumnSplitter } from 'src/components/ColumnSplitter';

const meta = {
  title: 'Example/ColumnSplitter',
  component: ColumnSplitter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColumnSplitter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ColumnSplitter',
      params: {
        RenderingIdentifier: 'ColumnSplitterRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
