import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { Center } from '../src/lit-wc/Center/center-l';

test('Card with slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToResponse(Center, {
    max: '60ch',
    slots: {
      default: 'Card content',
    },
  });

  expect(result).toContain('This is a card');
  expect(result).toContain('Card content');
});
