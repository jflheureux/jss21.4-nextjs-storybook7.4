import React from 'react';
import { LayoutServicePageState, SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { componentBuilder } from 'temp/componentBuilder';
import type { Preview } from '@storybook/react';

import 'src/assets/main.scss';

export const mockLayoutData = {
  sitecore: {
    context: {
      pageEditing: false,
      pageState: LayoutServicePageState.Normal,
    },
    setContext: () => {
      // nothing
    },
    route: null,
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <SitecoreContext
        componentFactory={componentBuilder.getComponentFactory({ isEditing: mockLayoutData.sitecore.context.pageEditing })}
        layoutData={mockLayoutData}
      >
        <Story />
      </SitecoreContext>
    ),
  ],
};

export default preview;
