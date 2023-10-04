import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const { user, loading } = useAuth();
  // const { user } = useContext(AuthContext);
    //  const token = localStorage.getItem('access-token');
     const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
        const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        },   
  });
  return [cart, refetch];
};
export default useCart;
