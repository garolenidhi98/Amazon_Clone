import React, { useEffect, useState } from 'react';
import "./Payment.css";
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link ,useHistory} from 'react-router-dom';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../../reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../../vendors/axios';
import { db } from "../../vendors/firebase";
import stripe_logo from '../../media/stripe-logo.png';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);
    const [succeeded ,setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        //Generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            if (getCartTotal(cart) > 0) {
                const response = await axios({
                    method: "post",
                    //stripe expects the total in a currencies subunits
                    url: `/payment/create?total=${getCartTotal(cart) * 100}`,
                });
                setClientSecret(response.data.clientSecret);
            }
        };
        getClientSecret();
    }, [cart]);
    
    console.log("THE SECRET IS >>>>", clientSecret.toString())
    // console.log("THE SECRET IS >>>>", clientSecret)
    const handleSubmit = async (event) => {
        //do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        }).then((res) => {
            const { paymentIntent } = res;
            //paymentIntent=payment confirmation

            db
                .collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                });

            setSucceeded(true);
            setError(null)
            setProcessing(false)
 
            dispatch({
                type: "EMPTY_CART",
            });

            history.replace("/orders");
        })
            .catch((err) => console.log(err));
    };

    const handleChange = event => {
        //Listen for changes in the cardElement
        //and display any errors as the Customer types their Card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
        
  return (
      <div className='payment'>
          <div className='payment__container'>
              <h1>
                  Checkout(
                  {/* <Link to="/checkout">{cart?.length} items</Link> */}
                  <Link to="/cart">{cart?.length} items</Link>
                  )
              </h1>
          
          {/* Payment section 1-Delivery Address */}
          <div className="payment__section">
              <div className="payment__title">
                  <h3>Delivery Address</h3>
              </div>
              <div className="payment__address">
                  <p>{user?.email}</p>
                  <p>123 React Lane</p>
                  <p>Maharashtra ,India</p>
              </div>
          </div>
          
          {/* Payment section 1-Review items */}
          <div className="payment__section">
              <div className="payment__title">
                  <h3>Review items and delivery</h3>
              </div>
              <div className="payment__items">
                {cart.map(item => (
                  <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />  
                    ))}
              </div>
          </div>

          {/* Payment section 1-Payment Method */}
          <div className="payment__section">
          <div className="payment__title">
                <h3>Payment Method</h3>
                <img className="payment__titleLogo" src={stripe_logo} alt="" />
          </div>
          <div className="payment__details">
                  {/* Stripe magic will go */}

                  <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange} />
                      
                      <div className="payment__priceContainer">
                         <CurrencyFormat
                                  renderText={(value) => (
                                    <>
                                       <h3>Order Total :{value}</h3> 
                                    </>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹ "}
                          />
                          <button disabled={processing || disabled || succeeded}>
                              <span>{ processing ? 'Processing...' : "Buy Now" }</span>
                          </button>
                      {/* Error */}
                            {error && <div>{error}</div>}
                        </div>
                  </form>
            </div>
         </div>
      </div>
   </div>   
  )
}

export default Payment;
