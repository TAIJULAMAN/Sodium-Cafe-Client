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
    <div className="my-10">
      <Helmet>
        <title>Sodium Cafe | Menu</title>
      </Helmet>
      {/*....................menu section starts here........................................................................................... */}
      <Cover
        img={cover1}
        title={"Our Menu"}
        detail={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle subHeading={"don't miss"} heading={"today's offer"}>
        {" "}
      </SectionTitle>
      <MenuCatagory items={offered}></MenuCatagory>

      <MenuCatagory
        items={pizza}
        title="pizza"
        detail="pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot."
        img={cover3}
      ></MenuCatagory>

      <MenuCatagory
        items={dessert}
        title="dessert"
        detail="dessert, the last course of a meal. In the United States dessert is likely to consist of pastry, cake, ice cream, pudding, or fresh or cooked fruit. British meals traditionally end with nuts, fruits, and port or other dessert wine, while French practice is to end with fruit, cheese, and wine; in both Britain and France, a more elaborate meal would include a sweet course preceding the dessert offerings. In Spain, Portugal, and Latin American countries, desserts of flan (a baked caramel custard) are ubiquitous. "
        img={cover2}
      ></MenuCatagory>
      <MenuCatagory
        items={soup}
        title="soup"
        detail="soup, liquid food prepared by cooking meat, poultry, fish, legumes, or vegetables with seasonings in water, stock, milk, or some other liquid medium. The cooking of soup is as ancient as the devising of vessels to hold liquid; before the development of pots that could withstand the direct heat of a fire, soups were cooked by dropping hot stones into the liquid. The long cooking of soup enabled nourishment to be drawn from meagre quantities of fish and meat too bony or tough to be otherwise utilized."
        img={cover4}
      ></MenuCatagory>
      <MenuCatagory
        items={salad}
        title="salad"
        detail="salad, any of a wide variety of dishes that fall into the following principal categories: green salads; vegetable salads; salads of pasta, legumes, or grains; mixed salads incorporating meat, poultry, or seafood; and fruit salads. Most salads are traditionally served cold, although some, such as German potato salad, are served hot."
        img={cover5}
      ></MenuCatagory>
    </div>
  );
};

export default OurMenu;
