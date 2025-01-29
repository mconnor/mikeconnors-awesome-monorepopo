import type { APIRoute } from 'astro'; // Outputs: /builtwith.json

// type Props = {
//   _params: Record<string, string>;
//   _request: Request;
// };

export const GET: APIRoute = async () => {
  await Promise.resolve();
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/',
    }),
  );
};
