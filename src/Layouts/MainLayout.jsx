import { Outlet } from "react-router";
import Navbar from "../components/Common Components/Navbar";
import Contact from "../components/Common Components/Contact";
import Footer from "../components/Common Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;