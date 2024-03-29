import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCatagory = ({ img, title, items, detail }) => {
  return (
    <div className="pt-5">
      {title && <Cover img={img} title={title} detail={detail}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-5">
       <Link to={`/order/${title}`}>
       <button className="btn border-[#2B3440] btn-outline border-0 border-b-4">
          Order Now
        </button>
       </Link>
      </div>
    </div>
  );
};

export default MenuCatagory;
