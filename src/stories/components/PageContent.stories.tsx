import type { Meta, StoryObj } from '@storybook/react';

import { Default as PageContent } from 'src/components/PageContent';

const meta = {
  title: 'Example/PageContent',
  component: PageContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'PageContent',
      params: {
        RenderingIdentifier: 'PageContentRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
