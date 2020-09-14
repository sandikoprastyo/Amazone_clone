import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../config/reducer";
import { useStateValue } from "../StateProvider/StateProvider";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  const handleProced = () => {
    if (user === null) {
      alert("login please....");
      return false;
    }
    history.push("/payment");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.lenght} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order container a gift
            </small>
          </>
        )}
        decimal={2}
        value={getBasketTotal(basket)}
        display={"text"}
        thousandSeprator={true}
        prefix={"$ "}
      />
      <button onClick={handleProced}>Proced to Checkout</button>
    </div>
  );
};

export default Subtotal;
