import path from 'path';
import { scaffoldFile } from '@sitecore-jss/sitecore-jss-dev-tools';
import { ScaffoldComponentPlugin, ScaffoldComponentPluginConfig } from '..';
import generateStoriesSrc from '../../templates/stories-src';

/**
 * Generates the Storybook stories file.
 */
class StorybookPlugin implements ScaffoldComponentPlugin {
  order = 99;

  exec(config: ScaffoldComponentPluginConfig) {
    const { componentName, componentPath } = config;
    const storiesComponentPath = componentPath.startsWith('src/')
      ? componentPath
      : `src/components/${componentPath}`;

    const storiesFilename = `${componentName}.stories.tsx`;
    const storiesRoot = 'src/stories';
    const storiesPath = storiesComponentPath.substring(4);
    const storiesOutputFilePath = path.join(storiesRoot, storiesPath, storiesFilename);
    const storiesTemplate = generateStoriesSrc(componentName, storiesComponentPath);

    const storiesOutputPath = scaffoldFile(storiesOutputFilePath, storiesTemplate);

    return {
      ...config,
      storiesOutputPath,
    };
  }
}

export const storybookPlugin = new StorybookPlugin();
