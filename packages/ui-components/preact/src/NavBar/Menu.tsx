import { type TsimpleLink, SimpleLinkSchema } from '@repo/schemas/Schemas';

interface Props {
  class?: string;
  menuItems: TsimpleLink[];

  tabindex?: 0 | 1 | 2;
}

function Menu({
  menuItems,
  tabindex = 0,
  class:
    className = 'dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow',
}: Props) {
  return (
    <ul tabindex={0} class={className}>
      {menuItems.map(({ href, label }) => (
        <li>
          <a role="button" class="link" href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default Menu;
