import "./Cart.css";

import { useCart } from "../../contexts/cartContext/CartContext";

import LC from "../../components/cards/line-card/Line-Card";

const Cart = () => {
  const { cart } = useCart();
  return (
    <>
      <div className="cart">
        <LC round={cart} />
      </div>
    </>
  );
};

export default Cart;