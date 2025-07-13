interface Props {
  name: string;
  dirPath: string;
  icon?: string;
}

function NavItem({ name, dirPath, icon }: Props) {
  return (
    <a href={dirPath} class="link">
      {name}
    </a>
  );
}

export default NavItem;
