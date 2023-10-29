import banner from "../../../assets/home/banner.jpg";
const About = () => {
  return (
    <div className="relative mb-20 grid md:grid-rows-1">
      <img src={banner} className="w-full h-[580px]" />
      <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded p-4 text-center bg-white shadow-2x">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Sodium Cafe</h1>
        <p className="py-4 text-sm md:text-base lg:text-lg xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          necessitatibus nemo itaque.<br />
          Aliquam sed possimus beatae repudiandae ipsa, ad eius voluptatum cupiditate 
          facere nam consequatur, <br />
          porro iste consequuntur veritatis voluptatem molestias labore pariatur 
          corrupti.Id odio quibusdam <br />
          quidem soluta, in temporibus ab tenetur ex facere quo tempora sunt illo! 
          Eum facere molestias accusantium.
        </p>
      </div>
    </div>
  );
};

export default About;
