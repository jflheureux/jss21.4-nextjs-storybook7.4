import type { Meta, StoryObj } from '@storybook/react';

import { Default as Title } from 'src/components/Title';

const meta = {
  title: 'Example/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Title',
      params: {
        RenderingIdentifier: 'TitleRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
