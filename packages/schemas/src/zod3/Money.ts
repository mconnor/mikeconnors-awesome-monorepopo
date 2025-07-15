import { z } from 'astro:content';

const dollar = z.literal('$');
const euro = z.literal('€');
const pound = z.literal('£');
const yen = z.literal('¥');
const yuan = z.literal('¥');
const rupee = z.literal('₹');
const won = z.literal('₩');
const real = z.literal('R$');
const franc = z.literal('CHF');
const krona = z.literal('kr');

export const CurrencySymbolSchema = z.union([
  dollar,
  euro,
  pound,
  yen,
  yuan,
  rupee,
  won,
  real,
  franc,
  krona,
]);
