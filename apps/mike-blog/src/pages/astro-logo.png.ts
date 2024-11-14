
import type { APIRoute } from 'astro';
const url = 'https://docs.astro.build/assets/full-logo-light.png';



export const GET: APIRoute = async GET({ params, request }) => {
  const response = await fetch(url);
  return new Response(await response.arrayBuffer());
}