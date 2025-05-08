import { useState } from 'react';

import MyButton from '#internal/Button/index.tsx';

interface Props {
  children: React.ReactNode;
  class: string;
}

export default function Counter({ children, class: className }: Props) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className={className}>
        <MyButton onClick={subtract}>-</MyButton>
        <p className="text-primary-900 dark:text-primary-100">{count}</p>

        <MyButton onClick={add}>+</MyButton>
      </div>
      <div>{children}</div>
    </>
  );
}
