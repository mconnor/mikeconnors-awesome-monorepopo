import cn from '@repo/utils/cn';

interface Props {
  prime?: boolean;
  textCol?: 'blue' | 'red' | 'yellow';
}

const colorsPrimary = [
  {
    label: 50,
    class: 'bg-primary-50',
  },
  {
    label: 100,
    class: 'bg-primary-100',
  },
  {
    label: 200,
    class: 'bg-primary-200',
  },
  {
    label: 300,
    class: 'bg-primary-300',
  },
  {
    label: 400,
    class: 'bg-primary-400',
  },
  {
    label: 500,
    class: 'bg-primary-500',
  },
  {
    label: 600,
    class: 'bg-primary-600',
  },
  {
    label: 700,
    class: 'bg-primary-700',
  },
  {
    label: 800,
    class: 'bg-primary-800',
  },
  {
    label: 900,
    class: 'bg-primary-900',
  },
  {
    label: 950,
    class: 'bg-primary-950',
  },
];

const colorsAccent = [
  {
    label: 50,
    class: 'bg-accent-50',
  },
  {
    label: 100,
    class: 'bg-accent-100',
  },
  {
    label: 200,
    class: 'bg-accent-200',
  },
  {
    label: 300,
    class: 'bg-accent-300',
  },
  {
    label: 400,
    class: 'bg-accent-400',
  },
  {
    label: 500,
    class: 'bg-accent-500',
  },
  {
    label: 600,
    class: 'bg-accent-600',
  },
  {
    label: 700,
    class: 'bg-accent-700',
  },
  {
    label: 800,
    class: 'bg-accent-800',
  },
  {
    label: 900,
    class: 'bg-accent-900',
  },
  {
    label: 950,
    class: 'bg-accent-950',
  },
];

const colorVariants = {
  blue: 'hover:bg-blue-500 text-blue-600',
  red: 'hover:bg-red-400 text-red-600',
  yellow: 'hover:bg-yellow-400 text-yellow-600',
};

function Colors({ prime, textCol = 'blue' }: Props) {
  const colors = prime ? colorsPrimary : colorsAccent;
  const title: string = prime ? 'Primary Colors' : 'Accent Colors';
  return (
    <>
      <h2 className="text-5xl">@repo/ui-react/Colors</h2>
      <h3 className="text-[--s8]">{title}</h3>
      {colors.map(({ label, class: className }) => {
        return (
          <div key={label} className={className}>
            {/* <p className={['text-4xl font-bold', colorVariants[textCol]]}></p> */}
            <p className={cn('text-4xl font-bold', colorVariants[textCol])}>
              {label}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Colors;
