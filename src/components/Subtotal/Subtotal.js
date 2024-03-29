import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
    const [{ cart }] = useStateValue ();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
                Subtotal ({cart.length} items): <strong>{ value }</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        onClick={e => history.push("/payment")}
        disabled={cart.length === 0 && true}
        className={`${cart.length === 0 && 'payment__disabled'}`}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
