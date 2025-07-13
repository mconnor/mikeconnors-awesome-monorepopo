export { default as Box } from './Box/index.astro';
export { default as Center } from './Center/index.astro';
export { default as Cluster } from './Cluster/index.astro';
export { default as Container } from './Container/index.astro';
export { default as Cover } from './Cover/index.astro';
export { default as Frame } from './Frame/index.astro';
export { default as Grid } from './Grid/index.astro';
export { default as Icon } from './Icon/index.astro';
export { default as Imposter } from './Imposter/index.astro';
export { default as Reel } from './Reel/index.astro';
export { default as Stack } from './Stack/index.astro';
export { default as Switcher } from './Switcher/index.astro';


type Percentage = `${number}%`;
type CustomPropType = `var(--${string})`;

type RmUnitType =
  | CustomPropType
  | '0'
  | `${number}${'px' | 'rem' | 'ch' | 'em' | 'vh' | 'vw' | 'vmin' | 'vmax' | '%' | 'svh' | 'lvh' | 'dvh'}`;

type JustifyContentTypes =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline';
type AlignItemsTypes =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';

export type {
  AlignItemsTypes,
  BorderStyle,
  JustifyContentTypes,
  Percentage,
  RmUnitType,
};
