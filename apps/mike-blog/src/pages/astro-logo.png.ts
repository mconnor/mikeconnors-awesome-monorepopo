import type { APIRoute } from 'astro';
const url = 'https://docs.astro.build/assets/full-logo-light.png';

export const GET: APIRoute = async () => {
  const response = await fetch(url);
  return new Response(await response.arrayBuffer());
};
