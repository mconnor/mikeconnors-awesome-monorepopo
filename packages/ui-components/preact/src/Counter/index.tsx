/** @jsxImportSource preact */

import type { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';

interface Props {
  children?: ComponentChildren;
  class: string;
}

/** A counter written with Preact */
export default function Counter({ children, class: className }: Props) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div class={className}>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}
