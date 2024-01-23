import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../CustomHook/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";


const PopularItem = () => {
   const [menu] = useMenu()
   const popular = menu.filter(item=>item.category==='popular')
  return (
    <section className="mb-20 max-w-7xl mx-auto px-4">
       <SectionTitle
       subHeading="From Our Menu"
       heading="most popular items"
       ></SectionTitle>
     <div className="grid md:grid-cols-2 gap-4">
         {
             popular.map(item=><MenuItem
             key={item._id}
             item={item}
             ></MenuItem>)
         }
       </div>
       <div className="text-center my-5">
       <Link to="/order/salad">
       <button className="btn border-[#2B3440] btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
       </Link>
      </div>

     </section>
  );
};

export default PopularItem;


