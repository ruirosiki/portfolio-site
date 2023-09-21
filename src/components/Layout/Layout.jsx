import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

export default function Layout() {
  return (
    <>
      <div>
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
