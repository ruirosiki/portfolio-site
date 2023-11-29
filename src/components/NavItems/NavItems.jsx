import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./NavItems.css";

export default function NavItems({ items }) {
  return (
    <li className="nav-item" to={items.url}>
      <a href={items.url}>{items.title}</a>
    </li>
  );
}
