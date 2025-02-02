import "./Check.css";

import { useCart } from "../../contexts/cartContext/CartContext";

const Check = () => {
  const { cart, getTotalPrice } = useCart();
  return (
    <>
      <div className="check">
        <div className="check-conclusive">
          <div className="check-price">
            Общая сумма:⠀
            {`${Intl.NumberFormat("ru-Ru").format(`${getTotalPrice()}`)} ₸`}
          </div>
          <div className="check-price">
            Обслуживание 5%:⠀
            {`${Intl.NumberFormat("ru-Ru").format(
              `${getTotalPrice() * 0.05}`
            )} ₸`}
          </div>
          <div className="check-price">
            К оплате:⠀
            {`${Intl.NumberFormat("ru-Ru").format(`
            ${getTotalPrice() + getTotalPrice() * 0.05}
            `)} ₸`}
          </div>
        </div>
        <div className="check-reservoir">
          {cart.map((line) => (
            <div className="check-card" key={line.id}>
              <div>{line.name}</div>
              <div>{line.quantity}</div>
              <div>{line.price}</div>
              <div>{line.quantity * line.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Check;
