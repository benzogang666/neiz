import "./Col-Card.css";

import { useState } from "react";

import Specific_Dish from "../../specifics/dish/Specific-Dish";

const Col_Card = ({ round }) => {
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
            <div
              className="c-c-image"
              onClick={() => startSpecific(line.id)}
            ></div>
            <div className="c-c-data">
              <div className="c-c-named">{line.name}</div>
              <div className="c-c-details">{line.details}</div>
              <div className="c-c-price">{line.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Col_Card;