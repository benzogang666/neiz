import "./Row-Card.css";

import { useState } from "react";

import Specific_Dish from "../../specifics/dish/Specific-Dish";

const Row_Card = ({ round }) => {
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
            <div
              className="r-c-image"
              onClick={() => startSpecific(line.id)}
            ></div>
            <div className="r-c-data">
              <div className="r-c-named">{line.name}</div>
              <div className="r-c-details">{line.details}</div>
              <div className="r-c-price">
                {Intl.NumberFormat("ru-Ru").format(line.price) + " ₸"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Row_Card;