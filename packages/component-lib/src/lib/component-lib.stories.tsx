import type { Meta } from '@storybook/react';
import { ComponentLib } from './component-lib';

const Story: Meta<typeof ComponentLib> = {
  component: ComponentLib,
  title: 'ComponentLib',
};
export default Story;

export const Primary = {
  args: {},
};
