import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet";
import useMenu from "../CustomHook/useMenu";
import { useState } from "react";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const categories = ["pizza", "soup", "salad", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Sodium Cafe|Order</title>
      </Helmet>

      <Cover
        img={img}
        title={"order food"}
        detail={"Would you like to try a dish?"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center bg-slate-500 mb">
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>salad</Tab>
          <Tab>dessert</Tab>
          <Tab>drink</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderPage;
