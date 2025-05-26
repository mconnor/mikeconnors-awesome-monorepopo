/** @jsxImportSource preact */

import { memo } from 'preact/compat';
import type { ComponentChildren } from 'preact';
import { useState, useCallback } from 'preact/hooks';

interface CounterProps {
  children?: ComponentChildren;
  class: string;
}

/** A counter written with Preact */
function Counter({ children, class: className }: CounterProps) {
  const [count, setCount] = useState(0);
  
  const add = useCallback(() => setCount((i) => i + 1), []);
  const subtract = useCallback(() => setCount((i) => i - 1), []);

  return (
    <>
      <div class={className}>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      {children && <div class="counter-message">{children}</div>}
    </>
  );
}

export default memo(Counter);
