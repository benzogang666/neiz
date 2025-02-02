import "./Line-Card.css";

const Line_Card = ({ round }) => {
  return (
    <>
      <div className="line-cards">
        {round.map((line) => (
          <div className="line-card" key={line.id}>
            <div className="l-c-image"></div>
            <div className="l-c-data">
              <div className="l-c-named">{line.name}</div>
              <div className="l-c-price">{line.price}</div>
              <div className="l-c-expenses">
                <div className="l-c-counter">
                  <div>-</div>
                  <div>6</div>
                  <div>+</div>
                </div>
                <div className="l-c-all-price">5 555</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Line_Card;