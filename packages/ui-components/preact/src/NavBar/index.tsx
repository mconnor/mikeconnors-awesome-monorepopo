import * as z from 'zod/v3';
import type { ComponentChildren } from 'preact';
import  { allBaseLinksSx  } from '@repo/schemas/Links';
import HamburgerIcon from './Icon.tsx';

type NavType = z.infer<typeof allBaseLinksSx>;
interface Props {
  navLinks: NavType;
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
  const {data: parsedNavs, success, error} = allBaseLinksSx.safeParse(navLinks);
  if (error ) throw new Error(error.message)

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

          <ul
            tabindex={tabindex}
            class="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
          >
            {parsedNavs.map(({ dirPath, name }) => (
              <li>
                <a role="button" class="link" href={dirPath}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="./" className="btn btn-ghost btn-xl">
          {title}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul tabindex={tabindex} class="menu menu-horizontal px-1">
          {parsedNavs.map(({ dirPath, name }) => (
            <li>
              <a role="button" class="link" href={dirPath}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">{rightButton}</div>
    </div>
  );
}

export default NavBar;
