import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-area">
        <Link to="/" className="logo"></Link>
        <NavBar />
      </div>
    </header>
  );
}
