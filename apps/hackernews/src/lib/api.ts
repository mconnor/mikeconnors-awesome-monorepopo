// import { z } from 'astro:content';

const story = (path: string) => `https://node-hnapi.herokuapp.com/${path}`;

const user = (path: string) =>
  `https://hacker-news.firebaseio.com/v0/${path}.json`;

export default async function fetchAPI(path: string) {
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

  // try {
  //   const text = await fetch(url, { headers })
  //     .then((res) => res.text())
  //     .then((txt) => JSON.parse(txt));

  //   try {
  //     if (text === null) {
  //       return { error: 'Not found' };
  //     }
  //     return JSON.parse(text) as Record<string, unknown>;
  //   } catch (e: unknown) {
  //     console.error(`Received from API: ${text}`);
  //     console.error(e);
  //     return { error: e };
  //   }
  // } catch (error) {
  //   return { error };
  // }
}
