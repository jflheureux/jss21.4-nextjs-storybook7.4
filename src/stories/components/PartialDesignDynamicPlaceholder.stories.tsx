import type { Meta, StoryObj } from '@storybook/react';

import PartialDesignDynamicPlaceholder from 'src/components/PartialDesignDynamicPlaceholder';

const meta = {
  title: 'src/components/PartialDesignDynamicPlaceholder',
  component: PartialDesignDynamicPlaceholder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartialDesignDynamicPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'PartialDesignDynamicPlaceholder',
      params: {
        RenderingIdentifier: 'PartialDesignDynamicPlaceholderRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
