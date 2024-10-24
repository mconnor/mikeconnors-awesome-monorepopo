import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import HeaderLink from '../src/components/HeaderLink.astro';

test('Card with slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(HeaderLink, {
    request: new Request('https://example.com/blog', {
      headers: {
        'x-some-secret-header': 'test-value',
      },
    }),
    slots: {
      default: 'Card content',
    },
  });

  expect(result).toContain('This is a card');
  expect(result).toContain('Card content');
});
