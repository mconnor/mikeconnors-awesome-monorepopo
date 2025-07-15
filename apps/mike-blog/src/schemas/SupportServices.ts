import { z } from 'astro:content';

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
  currency: CurrencySymbolSchema,
});

const featuresSchema = z.array(
  z.object({
    copy: z.string(),
    has: z.boolean(),
  }),
);

export type FeatureType = z.infer<typeof featuresSchema>;

export const SupportServiceSchema = z.object({
  id: z.string(),
  service: z.string(),
  descrip: z.string(),
  priceLevels: SubscriptionPriceSchema,
  level: PlansSchema,
  active: z.boolean(),
  features: featuresSchema,
});

export type SupportServiceType = z.infer<typeof SupportServiceSchema>;
