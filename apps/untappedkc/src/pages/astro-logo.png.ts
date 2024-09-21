export async function fetchImage(url: string) {
  const response = await fetch(url);
  return new Response(await response.arrayBuffer());
}

export async function GET() {
  //   {
  //   params,
  //   request,
  // }: {
  //   params: unknown;
  //   request: unknown;
  // }
  const imageUrl = 'https://docs.astro.build/assets/full-logo-light.png';
  return fetchImage(imageUrl);
}
