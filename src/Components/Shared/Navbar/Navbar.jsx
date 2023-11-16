import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../CustomHook/useCart";
import useAdmin from "../../CustomHook/useAdmin";
import useAuth from "../../CustomHook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user)
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(total);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="gallery">Gallery</Link>
      </li>
      {isAdmin ? (
        <li>
          <Link to="/dashboard/adminhome">Dashboard</Link>
        </li>
      ) : (
        <li>
          <Link to="/dashboard/userhome">Dashboard</Link>
        </li>
      )}
      {/* <li>
        <Link to="/dashboard/mycart">
          <button className="btn gap-2">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </button>
        </Link>
      </li> */}
    </>
  );
  return (
    <div className="navbar  fixed opacity-50 z-10 bg-neutral-900 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost   lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-neutral-900 rounded-box w-52  hover:text-orange-600"
          >
            {navOptions}
          </ul>
        </div>

        <a className="btn btn-ghost normal-case  text-2xl ">Sodium Cafe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btnbtn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-neutral-900 text-white rounded-box w-52"
          >
            {/* TODO:create profile page using link */}
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <span className="text-lg">Cart item : {cart?.length || 0}</span>
            </li>
            <li>
              <span className="text-lg">Subtotal:{total} </span>
            </li>
            <li>
              <Link to="/dashboard/mycart">
                <button className="btn btn-ghost text-center">
                  <FaShoppingCart></FaShoppingCart><p>my cart</p>
                   </button>
              </Link>
            </li>
            <li>
              {user ? (
                <>
                  <button onClick={handleLogOut} className="btn btn-ghost">
                    LogOut
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
