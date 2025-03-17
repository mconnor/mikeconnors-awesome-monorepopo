import type { APIRoute } from 'astro';
// Outputs: /builtwith.json
export const GET: APIRoute = async () => {
  await Promise.resolve();
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/',
    }),
  );
};
