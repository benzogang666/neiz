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
          <img className="sc-dh-image" src="/images/bbq.png" />
          <div className="sc-dh-data">
            <div className="sc-dh-named">Renamed</div>
            <div className="sc-dh-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              expedita dolorem ex! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. In error vel at quo natus minima inventore
              laborum, quos nostrum cumque alias consequuntur assumenda, eum
              quidem ex excepturi aspernatur eligendi vitae omnis non. Odio
              suscipit repellat aliquam eaque dicta ullam officiis reprehenderit
              hic minima. Modi nulla quas laboriosam officiis amet, laborum
              mollitia, delectus molestiae quae error inventore animi quo
              blanditiis sed vero assumenda et? Minima repellendus quos
              perferendis fuga voluptatem velit!
            </div>
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