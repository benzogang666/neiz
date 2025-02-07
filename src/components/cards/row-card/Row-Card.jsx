import "./Row-Card.css";

import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

import { useState } from "react";

import { useCart } from "../../../contexts/cartContext/CartContext";

import Specific_Dish from "../../specifics/dish/Specific-Dish";

const Row_Card = ({ round }) => {
  const { addToCart, decreaseQuantity, getProductQuantity } = useCart();

  const [specific, setSpecific] = useState(false);

  const startSpecific = (id) => setSpecific(id);

  const stopSpecific = () => setSpecific(false);
  return (
    <>
      <div className="row-cards">
        {round.map((line) => (
          <div className="row-card" key={line.id}>
            {specific && (
              <Specific_Dish
                line={line}
                isSpecific={specific === line.id}
                stopSpecific={stopSpecific}
              />
            )}
            <img
              className="r-c-image"
              src={`/images/${line.image}`}
              onClick={() => startSpecific(line.id)}
              alt=""
            />
            <div className="r-c-data">
              <div className="r-c-named">{line.name}</div>
              <div className="r-c-details">{line.details}</div>
              <div className="r-c-expenses">
                <div className="r-c-price">
                  {`${Intl.NumberFormat("ru-Ru").format(line.price)} ₸`}
                </div>
                <div className="r-c-counter">
                  {getProductQuantity(line.id) > 0 && (
                    <>
                      <IoRemoveCircle
                        className="r-c-counter-button"
                        onClick={() => decreaseQuantity(line.id)}
                      />
                      {getProductQuantity(line.id)}
                    </>
                  )}
                  <IoAddCircle
                    className="r-c-counter-button"
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

export default Row_Card;
