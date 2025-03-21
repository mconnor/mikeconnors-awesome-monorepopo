/** @jsxImportSource preact */

import type { ComponentChildren } from 'preact';
import { useState } from 'preact/hooks';

interface Props {
  children?: ComponentChildren;
  klass: string;
}

/** A counter written with Preact */
export default function PreactCounter({ children, klass }: Props) {
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
