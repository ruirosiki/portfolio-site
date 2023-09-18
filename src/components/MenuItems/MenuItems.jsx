import DropDown from "../DropDown/DropDown";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MenuItems.css";

export default function MenuItems({ items, depthLevel }) {
  const [dropDown, setDropDown] = useState(false);

  const closeDropDown = () => {
    dropDown && setDropDown(false);
  };
  // closes sub menu if user clicks outside the menu
  let ref = useRef();
  useEffect(() => {
    const handler = (evt) => {
      if (dropDown && ref.current && !ref.current.contains(evt.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropDown]);

  // Adds hover effect to submenus
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropDown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropDown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropDown}
    >
      {items.subMenu && items.url ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropDown ? "true" : "false"}
            onClick={() => setDropDown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link to={items.url}>{items.title}</Link>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>

          <DropDown
            depthLevel={depthLevel}
            subMenus={items.subMenu}
            dropDown={dropDown}
          />
        </>
      ) : !items.url && items.subMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropDown ? "true" : "false"}
            onClick={() => setDropDown((prev) => !prev)}
          >
            {items.title}
            {""}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <DropDown
            depthLevel={depthLevel}
            subMenus={items.subMenu}
            dropDown={dropDown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
}
