import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Card from '@repo/astro-ui/Card';
// import pic from '../assets/adelle960.jpg'

test('Card with slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Card, {
    slots: {
      // img: pic,
      headline: 'Card content',
    },
  });

  // expect(result).toContain(pic);
  expect(result).toContain('Card content');
});
