import type { Meta, StoryObj } from '@storybook/react';

import ContentBlock from 'src/components/ContentBlock';

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
      dataSource: 'truthyValue',
      params: {
        RenderingIdentifier: 'ContentBlockRenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
    fields: {
      heading: {
        value: 'Heading',
      },
      content: {
        value: 'Content',
      },
    },
  },
};
