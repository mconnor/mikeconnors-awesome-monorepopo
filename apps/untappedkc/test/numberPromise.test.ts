import { z } from 'astro:content';
import { expect, test } from 'vitest';

const isNum = z.number({
  required_error: 'isNum is required',
  invalid_type_error: "isNum must be 'a number'",
});

const numberPromise = z.promise(isNum);

test(async () => {
  const result1 = await numberPromise.parse(Promise.resolve('tuna'));

  // expect(result1).toBe({ZodError: Non-number type: string}

  //   )  )

  //const result = await numberPromise.parse(Promise.resolve(3.14));

  expect(result1).toBe(3.14);

  // => 3.14
});
