import "./Specific-Dish.css";

import { useCart } from "../../../contexts/cartContext/CartContext";

import { LuMinus, LuPlus } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Specific_Dish = ({ line, isSpecific, stopSpecific }) => {
  if (!isSpecific) return null;

  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();

  return (
    <>
      <div className="specific">
        <div className="specific-close" onClick={stopSpecific}>
          <IoClose />
        </div>
        <div className="specific-dish">
          <img className="sc-dh-image" src={`/images/${line.image}`} />
          <div className="sc-dh-data">
            <div className="sc-dh-named">{line.name}</div>
            <div className="sc-dh-details">{line.details}</div>
          </div>
          <div className="sc-dh-counter">
            {getProductQuantity(line.id) > 0 ? (
              <>
                <LuMinus
                  className="sc-dh-counter-button"
                  onClick={() => decreaseQuantity(line.id)}
                />
                <div>{getProductQuantity(line.id)}</div>
                <LuPlus
                  className="sc-dh-counter-button"
                  onClick={() => addToCart(line)}
                />
              </>
            ) : (
              <div onClick={() => addToCart(line)}>
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