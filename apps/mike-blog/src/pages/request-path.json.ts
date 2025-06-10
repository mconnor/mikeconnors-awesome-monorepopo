import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ request }) => {
  return new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
    }),
  );
};
