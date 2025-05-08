import { cn } from '@repo/utils/cn';

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

const colorsSecondary = [
  {
    label: 50,
    class: 'bg-secondary-50',
  },
  {
    label: 100,
    class: 'bg-secondary-100',
  },
  {
    label: 200,
    class: 'bg-secondary-200',
  },
  {
    label: 300,
    class: 'bg-secondary-300',
  },
  {
    label: 400,
    class: 'bg-secondary-400',
  },
  {
    label: 500,
    class: 'bg-secondary-500',
  },
  {
    label: 600,
    class: 'bg-secondary-600',
  },
  {
    label: 700,
    class: 'bg-secondary-700',
  },
  {
    label: 800,
    class: 'bg-secondary-800',
  },
  {
    label: 900,
    class: 'bg-secondary-900',
  },
  {
    label: 950,
    class: 'bg-secondary-950',
  },
];

function Colors({ secondary }: { secondary?: boolean }) {
  const colorValues = secondary ? colorsSecondary : colorsPrimary;
  return (
    <>
      <p>Colors.tsx from @repo/ui</p>
      {colorValues.map((color) => {
        return (
          <div key={color.label} className="grid grid-cols-2 gap-4">
            <div className={cn('h-16', color.class)}></div>
            <div>
              <p className="text-white">{color.label}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Colors;
