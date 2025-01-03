'use client';

interface IProps {
  mathFunc: () => void;
  children: React.ReactNode;
}

export function MyButton({ mathFunc, children }: IProps) {
  return <button onClick={mathFunc}>{children}</button>;
}
