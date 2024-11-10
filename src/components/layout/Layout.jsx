import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      {/* navBar */}
      <Navbar></Navbar>
      {/* dynamic */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
