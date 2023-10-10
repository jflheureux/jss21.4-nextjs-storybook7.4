import type { Meta, StoryObj } from '@storybook/react';

import { Default as Container } from 'src/components/Container';

const meta = {
  title: 'Example/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Container',
      params: {
        RenderingIdentifier: 'ContainerRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
