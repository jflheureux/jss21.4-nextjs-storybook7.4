import type { Meta, StoryObj } from '@storybook/react';

import { Default as ColumnSplitter } from 'src/components/ColumnSplitter';
import { Default as ContentBlockDefaultStory } from './ContentBlock.stories';

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

const placeholderChildComponent = {
  uid: 'anything',
  ...ContentBlockDefaultStory.args.rendering,
  fields: {
    ...ContentBlockDefaultStory.args.fields,
  },
};

export const Default: Story = {
  args: {
    rendering: {
      componentName: 'ColumnSplitter',
      params: {
        RenderingIdentifier: 'ColumnSplitterRenderingIdentifier',
      },
      placeholders: {
        'column-placeholder1-{*}': [placeholderChildComponent],
        'column-placeholder2-{*}': [placeholderChildComponent],
      },
    },
    params: {
      styles: '',
      EnabledPlaceholders: 'placeholder1,placeholder2',
    },
  },
};
