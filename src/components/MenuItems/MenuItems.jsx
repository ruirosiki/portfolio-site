import DropDown from "../DropDown/DropDown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./MenuItems.css";

export default function MenuItems({ items }) {
  return (
    <li className="menu-items" to={items.url}>
      <a href={items.url}>{items.title}</a>
    </li>
  );
}
