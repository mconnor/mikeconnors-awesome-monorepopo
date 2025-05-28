import { useState, memo, useCallback, type ReactNode } from 'react';

import MyButton from '#internal/Button/index.tsx';

interface CounterProps {
  children: ReactNode;
  class: string;
}

function Counter({ children, class: className }: CounterProps) {
  const [count, setCount] = useState(0);

  const add = useCallback(() => setCount((prev) => prev + 1), []);
  const subtract = useCallback(() => setCount((prev) => prev - 1), []);

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

export default memo(Counter);
