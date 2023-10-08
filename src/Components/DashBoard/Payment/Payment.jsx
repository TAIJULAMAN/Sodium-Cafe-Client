import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../CustomHook/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
        const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
                  <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
                  <Elements stripe={stripePromise}>
                      {/* <CheckoutForm price={price}></CheckoutForm> */}
                      <CheckoutForm cart={cart} price={price}></CheckoutForm>
                      {/* <CheckoutForm  cart={cart} price={price}></CheckoutForm> */}
                  </Elements>
              </div>
    );
};

export default Payment;