import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
// if you dont want to show the navigation and footer in login page.
const location = useLocation();
const noHeaderFooter = location.pathname.includes('gallery');


    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
       
        </div>
    );
};

export default Main;