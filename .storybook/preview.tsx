import React from 'react';
import { SitecoreContextReactContext } from '@sitecore-jss/sitecore-jss-nextjs';
import type { Preview } from '@storybook/react';

import 'src/assets/main.scss';

export const mockLayoutData = {
  sitecore: {
    context: {
      pageEditing: false,
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
      <SitecoreContextReactContext.Provider value={mockLayoutData.sitecore}>
        <Story />
      </SitecoreContextReactContext.Provider>
    ),
  ],
};

export default preview;
