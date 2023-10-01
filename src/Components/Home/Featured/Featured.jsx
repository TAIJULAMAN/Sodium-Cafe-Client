import featured from "../../../assets/home/featured.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Featured = () => {
  return (
    <div className="relative">
      <img src={featured} className="w-full h-[800px]" />
      <div className="w-[1096px] h-[300px] absolute top-10 right-36 rounded p-10  text-center shadow-xl">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"featured item"}
        ></SectionTitle>
        <div className="flex pr-5">
          <img
            className="w-[650px] h-[400px]"
            src={featured}
            alt="featured photo"
          />
          <div className="text-neutral-700 text-left mx-5 justify-center pl-4 items-center py-5 bg-gradient-to-r from-[#67e8f9] to-[rgba(21, 21, 21, 0)]">
            <h3 className="my-2">September 21, 2023</h3>
            <h1  className="my-2">WHERE CAN I GET SOME?</h1>
            <p  className="my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              illum ab veniam assumenda, velit, officia consectetur quaerat
              tempora eius cum asperiores nemo doloremque officiis reprehenderit
              laborum obcaecati magni culpa at. Cupiditate ad, laboriosam in
              aliquam dolor officiis placeat voluptas itaque rem officia debitis
              a neque tempore accusantium asperiores saepe quia?
            </p>
            <button className="btn btn-wide mt-3">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
