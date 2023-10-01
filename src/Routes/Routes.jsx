import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import OurMenu from "../Components/MenuPage/OurMenu/OurMenu";
import OrderPage from "../Components/OrderPage/OrderPage";
import LogIn from "../Components/LogIn/LogIn";
import Signup from "../Components/Signup/Signup";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Components/DashBoard/MyCart/MyCart";
import UserHome from "../Components/DashBoard/UserHome/UserHome";
import Reservation from "../Components/DashBoard/Reservation/Reservation";
import Payment from "../Components/DashBoard/PaymentHistory/Payment";
import AddReview from "../Components/DashBoard/AddReview/AddReview";
import Bookings from "../Components/DashBoard/Booking/Bookings";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element:<OurMenu></OurMenu>
        },
        {
            path: "/order/:category",
            element:<OrderPage></OrderPage>
        },
        {
          path: "/login",
          element:<LogIn></LogIn>
      },
        {
          path: "/signup",
          element:<Signup></Signup>
      }
      ]
    },

    // dashboard routes..............................................................................

    {
      path: "dashboard",
      element:<DashBoard></DashBoard>,
      children: [
        {
          path: "mycart",
          element:<MyCart></MyCart>,
        },
        {
          path: "userhome",
          element:<UserHome></UserHome>
        },
        {
          path: "reservation",
          element:<Reservation></Reservation>
        },
        {
          path: "reviews",
          element:<AddReview></AddReview>
        },
        {
          path: "bookings",
          element:<Bookings></Bookings>
        },
        {
          path: "payment",
          element:<Payment></Payment>
        }
      ]
    }
  ]);
  