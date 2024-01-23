import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/a.png";
import img2 from "../../../assets/home/b.png";
import img3 from "../../../assets/home/c.png";
import img4 from "../../../assets/home/d.png";
import img5 from "../../../assets/home/e.png";
import img6 from "../../../assets/home/f.png";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};
export default Banner;
