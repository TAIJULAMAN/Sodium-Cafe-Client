import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/11.jpg";
import img2 from "../../../assets/home/12.jpg";
import img4 from "../../../assets/home/14.jpg";

const Banner = () => {
  return (
    <div >
      <Carousel>
       
        <div>
          <img  src={img2} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
