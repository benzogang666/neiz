import "./Cart.css";

import { IoReceipt, IoTrash } from "react-icons/io5";

import { useCart } from "../../contexts/cartContext/CartContext";

import { NavLink } from "react-router";

import LC from "../../components/cards/line-card/Line-Card";

const Cart = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  return (
    <>
      <div className="cart">
        <div className="cart-dashboard">
          <NavLink className="cart-device" to="/check">
            <IoReceipt />
          </NavLink>
          <div className="cart-total-price">
            {Intl.NumberFormat("ru-Ru").format(getTotalPrice()) + " ₸"}
          </div>
          <IoTrash className="cart-device" onClick={() => clearCart()} />
        </div>
        <div className="cart-reservoir">
          <LC round={cart} />
        </div>
      </div>
    </>
  );
};

export default Cart;