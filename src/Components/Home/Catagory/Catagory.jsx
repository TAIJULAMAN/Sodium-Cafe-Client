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
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  max-w-screen-xl mb-10"
      >
        <SwiperSlide>
          <img src={cat1} alt="" />
          <h3 className="sm:text-4xl text-sm uppercase text-center  -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-4xl text-sm  uppercase text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat3} alt="" />
          <h3 className="sm:text-4xl text-sm  uppercase text-center -mt-16 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat4} alt="" />
          <h3 className="sm:text-4xl text-sm  uppercase text-center -mt-16 text-white">
            Desert
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat5} alt="" />
          <h3 className="sm:text-4xl text-sm  uppercase text-center -mt-16 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat3} alt="" />
          <h3 className="sm:text-4xl text-sm  uppercase text-center -mt-16 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cat2} alt="" />
          <h3 className="sm:text-4xl text-sm uppercase text-center -mt-16 text-white">
            Pizza
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;
