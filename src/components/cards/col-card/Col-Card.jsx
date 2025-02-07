import "./Col-Card.css";

import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

import { useState } from "react";

import { useCart } from "../../../contexts/cartContext/CartContext";

import Specific_Dish from "../../specifics/dish/Specific-Dish";

const Col_Card = ({ round }) => {
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();

  const [specific, setSpecific] = useState(false);

  const startSpecific = (id) => setSpecific(id);

  const stopSpecific = () => setSpecific(false);
  return (
    <>
      <div className="col-cards">
        {round.map((line) => (
          <div className="col-card" key={line.id}>
            {specific && (
              <Specific_Dish
                line={line}
                isSpecific={specific === line.id}
                stopSpecific={stopSpecific}
              />
            )}
            <img
              className="c-c-image"
              src={`/images/${line.image}`}
              onClick={() => startSpecific(line.id)}
              alt=""
            />
            <div className="c-c-data">
              <div className="c-c-named">{line.name}</div>
              <div className="c-c-details">{line.details}</div>
              <div className="c-c-expenses">
                <div className="c-c-price">
                  {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
                </div>
                <div className="c-c-counter">
                  {getProductQuantity(line.id) > 0 && (
                    <>
                      <IoRemoveCircle
                        className="c-c-counter-button"
                        onClick={() => decreaseQuantity(line.id)}
                      />
                      {getProductQuantity(line.id)}
                    </>
                  )}
                  <IoAddCircle
                    className="c-c-counter-button"
                    onClick={() => addToCart(line)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Col_Card;