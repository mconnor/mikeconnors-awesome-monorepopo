import * as z from 'zod';

import { CurrencySymbolSchema } from './Money.ts';

const DecimalRegex = /^\d+(\.\d{1,2})?$/;
const price = z.string().regex(DecimalRegex);

const BasicPlan = z.literal('basic');
const MiddlePlan = z.literal('value');
const PremiumPlan = z.literal('premium');

const PlansSchema = z.union([BasicPlan, MiddlePlan, PremiumPlan]);

const SubscriptionPriceSchema = z.object({
  monthly: price,
  yearly: price,
  currencySymbol: CurrencySymbolSchema,
});
export const SupportServiceSchema = z.object({
  service: z.string(),
  descrip: z.string(),
  price: SubscriptionPriceSchema,
  level: PlansSchema,
  badgeBool: z.boolean(),
  features: z.array(
    z.object({
      copy: z.string(),
      has: z.boolean(),
    }),
  ),
});

export type SupportServiceType = z.infer<typeof SupportServiceSchema>;
