import "./Specific-Dish.css";

import { useCart } from "../../../contexts/cartContext/CartContext";

import { IoClose } from "react-icons/io5";

const Specific_Dish = ({ line, isSpecific, stopSpecific }) => {
  if (!isSpecific) return null;

  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();

  return (
    <>
      <div className="specific_dish">
        <div className="specific-card">
          <div className="specific-dish-close" onClick={stopSpecific}>
            <IoClose />
          </div>
          <img className="sc-c-image" />
          <div className="sc-c-data">
            <div className="sc-c-named">{line.name}</div>
            <div className="sc-c-wait">
              Время приготовления: {line.cookingTime} мин
            </div>
            <div className="sc-c-details">{line.details}</div>
          </div>
          <div className="sc-c-counter">
            {getProductQuantity(line.id) > 0 ? (
              <>
                <div onClick={() => decreaseQuantity(line.id)}>-</div>
                <div className="sc-c-quantity">
                  {getProductQuantity(line.id)}
                </div>
                <div onClick={() => addToCart(line)}>+</div>
              </>
            ) : (
              <div className="sc-c-quantity" onClick={() => addToCart(line)}>
                {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Specific_Dish;
