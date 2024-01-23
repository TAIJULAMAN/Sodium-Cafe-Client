import banner from "../../../assets/home/banner.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const About = () => {
  return (
    <>
 <SectionTitle
        subHeading={"Want to know?"}
        heading={"About us"}
      ></SectionTitle>

<div className="relative mb-20 grid md:grid-rows-1">
      <img src={banner} className="w-full h-[580px]" />
      <div className="w-[70%]  md:w-[80%] lg:w-[100%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded p-4 text-center bg-white shadow-2x">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#2B3440]">
          Sodium Cafe
        </h1>
        <p className="py-4 text-sm md:text-base lg:text-lg xl:text-xl">
          Sodium Cafe is a culinary haven that seamlessly blends diverse
          flavors, offering a delectable journey through BBQ, Chinese, Pizza,
          Meatbox, Burgers, and more. Nestled in a cozy ambiance, this
          restaurant takes pride in its innovative fusion of cuisines, where the
          savory aromas of slow-cooked meats intermingle with the sizzling
          excitement of a Chinese wok and the irresistible allure of wood-fired
          pizzas. Whether you crave the smoky richness of BBQ, the bold spices
          of Chinese cuisine, the cheesy goodness of pizza, the hearty
          satisfaction of meatbox specials, or the classic comfort of a
          well-crafted burger, Sodium Cafe caters to every palate. With a
          commitment to quality and culinary creativity, Sodium Cafe invites
          diners to indulge in an unforgettable gastronomic experience where
          each dish is a symphony of flavors harmoniously curated for an
          exceptional dining adventure.
        </p>
      </div>
    </div>
    </>
  
  );
};

export default About;
