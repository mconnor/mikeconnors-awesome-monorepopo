import { type ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  mathFunc: () => void;
}

export function Button({ mathFunc, children }: IProps) {
  return <button onClick={mathFunc}>{children}</button>;
}
