export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a href="./">hello</a>
            </li>
            <li>
              <a href="./">Parent</a>
              <ul className="p-2">
                <li>
                  <a href="./">Submenu 1</a>
                </li>
                <li>
                  <a href="./">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./">Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn text-xl btn-ghost">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="./">Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a href="./">Submenu 1</a>
                </li>
                <li>
                  <a href="./">Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="./">Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
