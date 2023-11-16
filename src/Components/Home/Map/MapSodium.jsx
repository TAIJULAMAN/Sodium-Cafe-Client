// 90.469569,23.705523
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import  img from "../../../assets/icon/correct.png"
const MapSodium = () => {
  const position = { lat: 23.706845, lng: 90.471038 };
  const [open, setOpen] = useState(false);
  const mapId = "8c6fabe1934621aa";
  return (
    <>

<SectionTitle
className="m-10"
        subHeading={"Check it out"}
        heading={"Our Location"}
      ></SectionTitle>

      <APIProvider apiKey={"AIzaSyDvPLKp3jbXqZnybV92qe2wbJ4DWptExM4"}>
        <div className="h-[500px]">
          <Map center={position} zoom={20} mapId={mapId}>
            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
              <Pin
                background={"grey"}
                borderColor={"black"}
                glyphColor={"purple"}
              ></Pin>
            </AdvancedMarker>
            {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <p>You are in Sodiam Cafe.</p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
};

export default MapSodium;

//  icon: 'custom-marker.png'
//   animation: google.maps.Animation.BOUNCE
// 23.706845, 90.471038

// <SectionTitle
//   subHeading={"From 11.00am to 10.00pm"}
//   heading={"Order Online"}
// ></SectionTitle>
