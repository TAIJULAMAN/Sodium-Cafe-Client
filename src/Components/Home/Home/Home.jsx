import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ChefRecommands from "../ChefRecommands/ChefRecommands";
// import Featured from "../Featured/Featured";
// import PhnNumber from "../PhnNumber/PhnNumber";
import ReviewSection from "../ReviewSection/ReviewSection";
import PopularItem from "../PopularItem/PopularItem";
// import MapSodium from "../Map/MapSodium";
import AccordionPart from "../Accordion/AccordionPart";
import MarqueeText from "../marquee/MarqueeText";
// import DoubleBanner from "../DoubleBanner/DoubleBanner";


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Sodium Cafe | Home</title>
      </Helmet>
{/* <DoubleBanner></DoubleBanner> */}
      <Banner></Banner>
      <MarqueeText></MarqueeText>
      <Catagory></Catagory>
      <PopularItem></PopularItem>
      <About></About>
      {/* <PhnNumber></PhnNumber> */}
      <ChefRecommands></ChefRecommands>
      {/* <Featured></Featured> */}
      <AccordionPart></AccordionPart>
      <ReviewSection></ReviewSection>
      {/* <MapSodium></MapSodium> */}
    </div>
  );
};

export default Home;
