/** @jsxImportSource react */

import type { ReactNode } from 'react';
import { useState } from 'react';

import { Button } from '#components/Button.jsx';

interface Props {
  children?: ReactNode;
  klass: string;
}

export function Counter({ children, klass }: Props) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className={klass}>
        <Button mathFunc={subtract}>-</Button>
        <pre>{count}</pre>

        <Button mathFunc={add}>+</Button>
      </div>
      <div>{children}</div>
    </>
  );
}
