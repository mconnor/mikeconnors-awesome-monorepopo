import Menu from './Menu.tsx';
// import { type TsimpleLink, SimpleLinkSchema } from '@repo/schemas/Schemas';
import { type TmenuLink, MenuLinkSchema } from '@repo/schemas/Schemas';
import HamburgerIcon from './Icon.tsx';
interface Props {
  navLinks: TmenuLink[];
  tabindex?: number;
}

function NavBar({ navLinks, tabindex = 0 }: Props) {
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
        <a className="btn text-xl btn-ghost">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Menu menuItems={navLinks} class="menu menu-horizontal px-1" />
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default NavBar;
