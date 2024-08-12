/** @jsxImportSource react */

import { useState, type ReactNode } from 'react';
import { Button } from '#components/Button.tsx';

/** A counter written with React */
export function Counter({ children }: { children?: ReactNode }) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="counter">
        <Button mathFunc={subtract}>-</Button>
        <pre>{count}</pre>

        <Button mathFunc={add}>+</Button>

        {/* <button onClick={add}>+</button> */}
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
