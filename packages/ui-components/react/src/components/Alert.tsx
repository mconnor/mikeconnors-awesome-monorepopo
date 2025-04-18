import { cn } from '@repo/utils/cn';

interface AlertProps {
  type: 'success' | 'error';
  className?: string;
  children: React.ReactNode;
}

const Alert = ({ type, className, children }: AlertProps) => {
  const baseClasses = 'p-4 rounded';
  const typeClasses = cn({
    'bg-green-500 text-white': type === 'success',
    'bg-red-500 text-white': type === 'error',
  });

  return (
    <div className={`${baseClasses} ${typeClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Alert;
