interface ButtonProps {
  color?: 'blue' | 'red';
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({
  color = 'blue',
  children,
  onClick = () => console.log('click'),
}: ButtonProps) {
  const colorVariants = {
    blue: 'btn bg-blue-600 hover:bg-blue-500',
    red: 'btn bg-red-600 hover:bg-red-500',
  };
  return (
    <button onClick={onClick} className={`${colorVariants[color]}`}>
      {children}
    </button>
  );
}

export default Button;
