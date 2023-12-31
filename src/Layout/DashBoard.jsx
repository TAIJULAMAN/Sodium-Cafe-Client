import {
  FaHome,
  FaWallet,
  FaCalendarAlt,
  FaShoppingCart,
  FaBookOpen,
  FaShoppingBasket,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../Components/CustomHook/useCart";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Components/CustomHook/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
    const [isAdmin] = useAdmin();
  return (
    <div className="drawer text-black lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary text-white drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>

      <div className="drawer-side bg-orange-400">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
        {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add Item</NavLink></li>
                            <li><NavLink to="/dashboard/manageitem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/menu">
              <FaBookOpen></FaBookOpen> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBasket></FaShoppingBasket>Order Page
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;

