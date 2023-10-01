import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ItemCard from "./ItemCard";

const ChefRecommands = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menues")
      .then((res) => res.json())
      .then((data) => {
        const recommandesItems = data.filter(
          (items) => items.category === "soup"
        );
        setItems(recommandesItems);
      });
  }, []);
  return (
    <section className=" max-w-7xl mx-auto ">
      <SectionTitle
        subHeading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-3 my-5">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommands;
