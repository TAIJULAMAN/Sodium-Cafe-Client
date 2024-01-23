// import { useQuery } from "react-query";
import { useQuery } from "@tanstack/react-query";

const usePhotos = () => {
  const { data: photos, isLoading } = useQuery(["photos"], () =>
    fetch("photos.json").then((res) =>
      res.json()
    )
  );
  return [photos, isLoading];
};

export default usePhotos;