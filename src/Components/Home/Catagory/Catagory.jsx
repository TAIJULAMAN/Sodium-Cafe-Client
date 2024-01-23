import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import cat1 from "../../../assets/home/slide1.jpg";
import cat2 from "../../../assets/home/slide2.jpg";
import cat3 from "../../../assets/home/slide3.jpg";
import cat4 from "../../../assets/home/slide4.jpg";
import cat5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Catagory = () => {
  return (
    <section className="mb-5 w-full overflow-x-hidden mw-[600px]">
      <SectionTitle
        subHeading={"From 11.30 am to 11.00 pm"}
        heading={"Food Catagory"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper max-w-screen-md md:max-w-screen-xl lg:max-w-screen-xl mb-5"
      >
        <SwiperSlide>
          <img src={cat1} alt="" />
          <h3 className="-mt-10 mr-3 sm:text-7xl font-bold text-sm uppercase text-center  text-[#2B3440]">
            Appetizer
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat3} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Meatbox
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat4} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Wrap
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat5} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Sea Food
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat3} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Momo
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Platter
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Pasta
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Burger
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Chicken Fry
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Rice Bowl
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Chow Mein
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Sizzling
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Rice
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Vegetable
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Curry
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Drink
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Ice Cream
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-7xl text-sm font-bold uppercase text-center -mt-10 mr-3 text-[#2B3440]">
            Add On
          </h3>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Catagory;
