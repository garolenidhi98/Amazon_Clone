import React from 'react';
import "./CheckoutProduct.css";
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import { useStateValue } from '../../StateProvider';

function CheckoutProduct({ id, title, price, image, rating ,cartId, hideButton}) {
  const [ , dispatch] = useStateValue();

  const removeFromCart = () => {
    //Remove the product from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    })
  };
    
  return (
    <div className='checkoutProduct'>
          <img className='checkoutProduct__image' src={image} alt=''/>
          
          <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{title}</p> 
              <p className="checkoutProduct__price">
                  <small>₹ </small>
                  <strong>{price}</strong>
              </p>
              <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <StarRateOutlinedIcon />
                    ))}
        </div>
        {!hideButton && (
           <button onClick={removeFromCart}>Remove from cart</button>
        )}   
      </div>
    </div>
  )
}

export default CheckoutProduct;

