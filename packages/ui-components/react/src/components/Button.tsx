import type { ReactNode } from 'react';

interface IProps {
  mathFunc: () => void;
  children: ReactNode;
}

export function Button({ mathFunc, children }: IProps) {
  return <button onClick={mathFunc}>{children}</button>;
}
