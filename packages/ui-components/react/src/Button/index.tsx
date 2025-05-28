import type React from 'react';

interface ButtonI {
  color: 'red' | 'blue' | 'yellow';
  children: React.ReactNode;
}

function Button({ color, children }: ButtonI) {
  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-500 text-white',
    red: 'bg-red-500 hover:bg-red-400 text-white',
    yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
  };
  return (
    <button
      className={`${colorVariants[color]} rounded-md p-4 text-2xl underline`}
    >
      {children}
    </button>
  );
}

export default Button;
