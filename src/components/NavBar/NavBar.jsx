import React from "react";
import { menuItems } from "../../menuItems";
import MenuItems from "../MenuItems/MenuItems";
import "./NavBar.css";

export default function NavBar() {
  const depthLevel = 0;
  return (
    <nav className="menus nav-area">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
}
