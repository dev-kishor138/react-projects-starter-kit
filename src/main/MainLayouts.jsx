import { Outlet } from "react-router-dom";
import Navbar from "../components/default-components/Navbar";
import Footer from "../components/default-components/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayouts;