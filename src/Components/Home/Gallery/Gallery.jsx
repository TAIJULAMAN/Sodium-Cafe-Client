import { Bounce, LightSpeed } from "react-reveal";
import usePhotos from "../../CustomHook/usePhotos";
import Loading from "../../Shared/Loading/Loading";
const Gallery = () => {
  const [photos, isLoading] = usePhotos();
  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <>
      <LightSpeed top cascade>
        <h3 className="text-7xl font-bold text-primary text-center my-10">
          Our Happy Customers
        </h3>
      </LightSpeed>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 lg:ml-12">
        {photos?.map((photo) => {
          return (
            <div
              key={photo._id}
              className="card lg:max-w-lg md:max-h-64 bg-base-100 md:shadow-xl md:mr-5 my-5 pics"
            >
              <Bounce top cascade>
                <img src={photo.image} alt="" className="w-100 rounded-lg" />
              </Bounce>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;








//     { src: "", width: 800, height: 600 },
//     { src: "", width: 1600, height: 900 },
//     { src: "", width: 800, height: 600 },
//     { src: "", width: 1600, height: 900 },
//     { src: "", width: 800, height: 600 },
//     { src: "", width: 1600, height: 900 },
//     { src: "", width: 800, height: 600 },
 