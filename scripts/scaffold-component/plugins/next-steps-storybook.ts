import { ScaffoldComponentPlugin, ScaffoldComponentPluginConfig } from '..';
import chalk from 'chalk';

/**
 * Set next steps for the Storybook stories.
 */
class NextStepsStorybookPlugin implements ScaffoldComponentPlugin {
  order = 102;

  exec(config: ScaffoldComponentPluginConfig) {
    if (config.storiesOutputPath) {
      config.nextSteps.push(
        `* Test the component in Storybook by running ${chalk.green('jss storybook')}.`
      );
      config.nextSteps.push(
        `* Add mock data as needed in the ${chalk.green(config.storyOutputPath)} Storybook stories.`
      );
    }

    return config;
  }
}

export const nextStepsStorybookPlugin = new NextStepsStorybookPlugin();
