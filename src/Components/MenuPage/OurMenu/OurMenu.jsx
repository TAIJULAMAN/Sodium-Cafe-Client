import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../Components/Shared//SectionTitle/SectionTitle";
import useMenu from "../../CustomHook/useMenu";
import cover1 from "../../../assets/menu/banner3.jpg";
import cover2 from "../../../assets/menu/dessert-bg.jpeg";
import cover3 from "../../../assets/menu/pizza-bg.jpg";
import cover4 from "../../../assets/menu/soup-bg.jpg";
import cover5 from "../../../assets/menu/salad-bg.jpg";
import MenuCatagory from "../../Shared/MenuCatagory/MenuCatagory";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Sodium Cafe | Menu</title>
      </Helmet>
      {/*....................menu section starts here........................................................................................... */}
      <Cover
        img={cover1}
        title={"Our Menu"}
        detail={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCatagory items={offered}></MenuCatagory>

      <MenuCatagory
        items={pizza}
        title="pizza"
        detail="
        Pizza, an iconic delight, boasts a thin crust, rich tomato sauce, and gooey mozzarella, making it a globally cherished, versatile, and irresistible dish."
        img={cover3}
      ></MenuCatagory>

      <MenuCatagory
        items={dessert}
        title="dessert"
        detail="
        Desserts,a sweet symphony of cakes, pies, and treats. Indulge in the blissful finale, savoring each bite of delightful sweetness."
        img={cover2}
      ></MenuCatagory>

      <MenuCatagory
        items={soup}
        title="soup"
        detail="
        Soup, a comforting elixir of flavors, nourishes and warms the soul. From hearty stews to delicate broths, it's a versatile culinary embrace."
        img={cover4}
      ></MenuCatagory>

      <MenuCatagory
        items={salad}
        title="salad"
        detail="
        Salad, a vibrant medley of fresh greens, veggies, and dressings, offers a crisp and healthy burst of flavors. A delightful, nutritious palette on every plate."
        img={cover5}
      ></MenuCatagory>
    </div>
  );
};

export default OurMenu;
