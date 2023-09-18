import MenuItems from "../MenuItems/MenuItems";

export default function DropDown({ subMenus, dropDown, depthLevel }) {
  depthLevel = depthLevel + 1;
  const dropDownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropDownClass} ${dropDown ? "show" : ""}`}>
      {subMenus.map((subMenu, index) => (
        <MenuItems items={subMenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}
