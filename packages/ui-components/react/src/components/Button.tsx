interface IProps {
  mathFunc: () => void;
  children: JSX.Element;
}

export function Button({ mathFunc, children }: IProps) {
  return (
    <>
      <button onClick={mathFunc}>{children}</button>
    </>
  );
}
