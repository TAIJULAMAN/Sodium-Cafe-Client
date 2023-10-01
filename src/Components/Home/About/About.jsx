import banner from "../../../assets/home/banner.jpg";
const About = () => {
  return (
    <div className="relative mb-20">
      <img src={banner} className="w-full h-[580px]" />
      <div className="w-[1096px] h-[300px] absolute top-32 right-36 rounded p-10  text-center  bg-white shadow-2xl">
        <h1 className="text-4xl ">Sodium Cafe</h1>
        <p className="py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          necessitatibus nemo itaque.<br />
          Aliquam sed possimus beatae repudiandae ipsa, ad eius voluptatum cupiditate 
          facere nam consequatur, <br />
          porro iste consequuntur veritatis voluptatem molestias labore pariatur 
          corrupti.Id odio quibusdam <br />
          quidem soluta, in temporibus ab tenetur ex facere quo tempora sunt illo! 
          Eum facere molestias accusantium <br />
          a laudantium ullam exercitationem? Eum suscipit incidunt amet harum optio 
          totam tempora, porro distinctio <br />
          ullam at ut recusandae nesciunt nisi odiomolestias dolor quod tenetur saepe
          expedita! Tempora dicta ad<br />
        </p>
      </div>
    </div>
  );
};

export default About;
