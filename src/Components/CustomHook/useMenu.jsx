import { useQuery } from "@tanstack/react-query";

const useMenu =()=>{
  const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/menues');
            return res.json();
        }
    })

    return [menu,loading , refetch]
}
export default useMenu;

// import { useEffect, useState } from "react";

// const useMenu =()=>{
//     const [menu,setMenu]=useState([])
//     useEffect(()=>{
//      fetch('http://localhost:5000/menues')
//      .then(res=>res.json())
//      .then(data =>setMenu(data))
//     },[]);
//     return [menu]
// }
// export default useMenu;