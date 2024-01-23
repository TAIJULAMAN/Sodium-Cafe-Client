import { Parallax } from "react-parallax";
const Cover = ({ img, title, detail }) => {
  return (
    <Parallax
      blur={{ min: -100, max: 100 }}
      bgImage={img}
      bgImageAlt="food image"
      strength={-200}
    >
      <div className="hero hero-overlay bg-opacity-60 h-[200px] md:h-[300px]  lg:h-[400px]  ">
        <div className="  hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl uppercase font-bold">{title}</h1>
            <p className="mb-5">{detail}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
