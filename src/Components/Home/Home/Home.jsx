import { Helmet } from "react-helmet";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import ChefRecommands from "../ChefRecommands/ChefRecommands";
// import Featured from "../Featured/Featured";
import PhnNumber from "../PhnNumber/PhnNumber";
import ReviewSection from "../ReviewSection/ReviewSection";
import PopularItem from "../PopularItem/PopularItem";


const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Sodium Cafe | Home</title>
      </Helmet>
     
      <Banner></Banner>
      <Catagory></Catagory>
      <PopularItem></PopularItem>
      <About></About>
      <PhnNumber></PhnNumber>
      <ChefRecommands></ChefRecommands>
      {/* <Featured></Featured> */}
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default Home;
