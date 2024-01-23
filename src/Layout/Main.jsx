// import { Outlet, useLocation } from "react-router-dom";
import { Outlet} from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
// if you dont want to show the navigation and footer in any page.
// const location = useLocation();
// const noHeaderFooter = location.pathname.includes('gallery');


    return (
        <div>
            {/* <MarqueeText></MarqueeText> */}
           {/* {noHeaderFooter || <Navbar></Navbar> } */}
           <Navbar></Navbar> 
            <Outlet></Outlet>
           <Footer></Footer>
            {/* {noHeaderFooter || <Footer></Footer>} */}
       
        </div>
    );
};

export default Main;