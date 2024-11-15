import { defineAction } from 'astro:actions';

export const user = {
  getUser: defineAction(/* ... */),
  createUser: defineAction(/* ... */),
}