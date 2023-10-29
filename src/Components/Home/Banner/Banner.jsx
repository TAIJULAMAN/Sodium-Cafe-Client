import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/home/11.jpg"
import img2 from "../../../assets/home/12.jpg"
// import img3 from "../../../assets/home/13.jpg"
import img4 from "../../../assets/home/14.jpg"
// import img5 from "../../../assets/home/15.jpg"
// import img6 from "../../../assets/home/16.jpg"
import img7 from "../../../assets/home/17.jpg"
import img8 from "../../../assets/home/18.jpg"
// import img9 from "../../../assets/home/19.jpg"
import img10 from "../../../assets/home/20.jpg"
const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={img8} />
                   
                </div>
                <div>
                    <img src={img2} />
                
                </div>
                {/* <div>
                    <img src={img3} />
                    
                </div> */}
                <div>
                    <img src={img4} />
                    
                </div>
                {/* <div>
                    <img src={img5} />
                    
                </div>
                <div>
                    <img src={img6} />
                    
                </div> */}
                <div>
                    <img src={img7} />
                    
                </div>
                <div>
                    <img src={img1} />
                    
                </div>
                {/* <div>
                    <img src={img9} />
                    
                </div> */}
                <div>
                    <img src={img10} />
                    
                </div>
            </Carousel>
    );
};

export default Banner;