import type { Meta, StoryObj } from '@storybook/react';

import { Default as Promo } from 'src/components/Promo';

const meta = {
  title: 'Example/Promo',
  component: Promo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Promo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'Promo',
      params: {
        RenderingIdentifier: 'PromoRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
