import React from "react";
import { navItems } from "../../navItems";
import NavItems from "../NavItems/NavItems";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-items">
        {navItems.map((menu, index) => {
          return <NavItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
}
