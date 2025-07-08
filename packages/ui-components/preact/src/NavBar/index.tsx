import Menu from './Menu.tsx';
import * as z from 'zod/v3';
import type { ComponentChildren } from 'preact';
import { MenuLinkSchema } from '@repo/schemas/Schemas';
import HamburgerIcon from './Icon.tsx';
interface Props {
  navLinks: z.infer<typeof MenuLinkSchema>[];
  tabindex?: number;
  title?: string;
  rightButton: ComponentChildren;
}

function NavBar({
  navLinks,
  rightButton,
  title = 'mike connor - tech',
  tabindex = 0,
}: Props) {
  // const parsed = SimpleLinkSchema.parse(navLinks);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={tabindex}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <HamburgerIcon />
          </div>
          <Menu
            menuItems={navLinks}
            class="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
          />
        </div>
        <a href="./" className="btn btn-ghost btn-xl">
          {title}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Menu menuItems={navLinks} class="menu menu-horizontal px-1" />
      </div>
      <div className="navbar-end">{rightButton}</div>
    </div>
  );
}

export default NavBar;
