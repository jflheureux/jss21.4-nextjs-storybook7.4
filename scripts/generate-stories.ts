/*
  Storybook Component Stories Generator
  Generates Storybook stories for existing JSS components using `jss generate-stories`.
*/

/* eslint-disable no-throw-literal,no-console */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { scaffoldFile } from '@sitecore-jss/sitecore-jss-dev-tools';

const componentRootPath = 'src/components/';
const components = walkSync(componentRootPath);
// Matches component names that can optionally be preceded by a relative path
const nameParamFormat = new RegExp(/^((?:[\w-]+\/)*)([A-Z][\w-]+).tsx$/);
const storiesRootPath = 'src/stories';
import generateStoriesSrc from './templates/stories-src';

console.log(chalk.green('Generating Storybook stories...'));

components.forEach((component) => {
  console.log(`Component ${component}...`);

  const regExResult = nameParamFormat.exec(component);

  if (regExResult === null) {
    console.log(chalk.red(`${component} skipped. Name is not standard.`));
    return;
  }

  const componentPath = regExResult[1];
  const componentFileName = regExResult[2];
  const componentName = componentFileName.replace(/-/g, '');

  const storiesFilename = `${componentFileName}.stories.tsx`;
  const storiesOutputFilePath = path.join(
    storiesRootPath,
    'components',
    componentPath,
    storiesFilename
  );
  const storiesTemplate = generateStoriesSrc(componentName, `src/components/${componentPath}`);

  const storiesOutputPath = scaffoldFile(storiesOutputFilePath, storiesTemplate);

  if (storiesOutputPath) {
    console.log(chalk.green('Created'));
  } else {
    console.log(chalk.green('Already exists'));
  }
});

function walkSync(dir: string, relativepath?: string, filelist?: string[]) {
  const files = fs.readdirSync(dir);
  const currentRelativePath = relativepath || '';
  let outputFiles = filelist || [];

  files.forEach(function (file) {
    if (fs.statSync(dir + file).isDirectory()) {
      outputFiles = walkSync(dir + file + '/', currentRelativePath + file + '/',  outputFiles);
    } else {
      outputFiles.push(currentRelativePath + file);
    }
  });

  return outputFiles;
}
