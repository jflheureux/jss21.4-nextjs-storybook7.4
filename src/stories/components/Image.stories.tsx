import type { Meta, StoryObj } from '@storybook/react';

import { Default as Image } from 'src/components/Image';

const meta = {
  title: 'Example/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Image',
      params: {
        RenderingIdentifier: 'ImageRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
