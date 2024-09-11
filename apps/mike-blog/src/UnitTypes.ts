type Percentage = `${number}%`;
type CustomPropType = `var(--${string})`;

type RmUnitType =
  | CustomPropType
  | '0'
  | `${number}${'px' | 'rem' | 'ch' | 'em' | 'vh' | 'vw' | 'vmin' | 'vmax' | '%'}`;

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
  Percentage,
  RmUnitType,
  JustifyContentTypes,
  AlignItemsTypes,
  BorderStyle,
};
