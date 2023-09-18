import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { menuItems } from "../../menuItems";
import MenuItems from "../MenuItems/MenuItems";
import DropDown from "../DropDown/DropDown";

export default function NavBar({ user, setUser }) {
  const depthLevel = 0;
  return (
    <nav className="menus">
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}
