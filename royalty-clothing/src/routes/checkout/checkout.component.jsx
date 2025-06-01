import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>I am the checkout</h1>
    </div>
  );
};

export default Checkout;
