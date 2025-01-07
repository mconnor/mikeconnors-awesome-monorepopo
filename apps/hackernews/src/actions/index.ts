//Actions are defined in a server object
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  getStory: defineAction({
    input: z.object({
      path: z.string(),
    }),
    handler: async (input, ctx) => {
      const { path } = input;
      const story = (path: string) =>
        `https://node-hnapi.herokuapp.com/${path}`;

      const user = (path: string) =>
        `https://hacker-news.firebaseio.com/v0/${path}.json`;
      const url = path.startsWith('user') ? user(path) : story(path);

      const headers = { 'User-Agent': 'chrome' };

      return await fetch(url, { headers })
        .then((res) => res.text())
        .then((txt) => JSON.parse(txt) as Record<string, unknown>)
        .then((data) => {
          if (data === null) {
            throw new Error('Not found');
          }
          return data;
        })
        .catch((error: unknown) => ({ error }));
      //   return `Hello, ${input.name}!`;
    },
  }),
};
