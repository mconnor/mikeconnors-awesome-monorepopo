import { type JSX, useState } from 'react';

import { MyButton } from '#components/Button.tsx';

interface Props {
  children: React.ReactNode;
  klass: string;
}

export function Counter({ children, klass }: Props): JSX.Element {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <div>
      <div className={klass}>
        <MyButton mathFunc={subtract}>-</MyButton>
        <pre>{count}</pre>

        <MyButton mathFunc={add}>+</MyButton>
      </div>
      <div>{children}</div>
    </div>
  );
}
