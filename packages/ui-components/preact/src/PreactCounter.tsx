/** @jsxImportSource preact */

import { useState } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

interface Props {
  children?: ComponentChildren;
  klass: string;
}

/** A counter written with Preact */
export function PreactCounter({ children, klass }: Props) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div class={klass}>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}
