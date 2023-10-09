/**
 * Generates a Storybook stories boilerplate under `/stories` for a component under `src/components`
 * @param componentName - the component name
 * @returns Storybook stories boilerplate as a string
 */
function generateStoriesSrc(componentName: string, componentPath: string): string {
  return `import type { Meta, StoryObj } from '@storybook/react';

import { Default as ${componentName} } from '${componentPath}${componentName}';

const meta = {
  title: 'Example/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rendering: {
      componentName: '${componentName}',
      params: {
        RenderingIdentifier: '${componentName}RenderingIdentifier',
      },
    },
    params: {
      styles: '',
    },
  },
};
`;
}

export default generateStoriesSrc;
