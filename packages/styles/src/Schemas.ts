import { z } from 'zod';
const zero = z.literal('0');
// const mcUnitsLiteral = z.literal('px|rem|ch|em|%');
// const communUnits =
const mcUnitsEnum = z.enum(['px', 'rem', 'ch', 'em', '%']);
// Create a regular expression pattern from the enum values
const mcUnitsPattern = mcUnitsEnum.options.join('|');

const mcUnits = z.union([
  zero,
  z.string().regex(new RegExp(`^\\d+(${mcUnitsPattern})$`)),
]);

const flexGridUnits = z.union([zero, z.string().regex(/^\d+fr$/)]);

const myModularCSSvars = z.string().regex(/^var\(--[a-zA-Z0-9-]+\)$/);

// const widthUnitUnion = z.union([
//   zero,
//   z.string().regex(/^\d+(px|rem|ch|em|vw|vmin|vmax|%)$/),
//   z.string().regex(/^var\(--[a-zA-Z0-9-]+\)$/),
// ]);

const viewportHeightUnitEnum = z.enum(['svh', 'lvh', 'dvh', '%']);
const viewportWidthUnitEnum = z.enum(['svw', 'lvw', 'dvw', '%']);

const widthUnitUnion = z.union(
  [zero, mcUnits, myModularCSSvars],
  viewportWidthUnitEnum,
);

const heightUnitUnion = z.union(
  [zero, mcUnitsEnum, myModularCSSvars],
  viewportHeightUnitEnum,
);

// const screenWidthViewPortDims = z
//   .string()
//   .regex(/^\d+(vw|svh|lvh|dvh|vmin|vmax|%)$/);

const CenterUnits = z.union([widthUnitUnion, myModularCSSvars]);

// .container {
//   display: grid;
//   gap: 16px; /* pixels */
//   gap: 1em;  /* em units */
//   gap: 1rem; /* rem units */
//   gap: 1fr;  /* fraction units */
//   gap: 5%;   /* percentage */

const gapUnits = z.union([widthUnitUnion, flexGridUnits]);

export {
  CenterUnits,
  flexGridUnits,
  gapUnits,
  // screenWidthDims,
  heightUnitUnion,
  mcUnits,
  widthUnitUnion,
};
