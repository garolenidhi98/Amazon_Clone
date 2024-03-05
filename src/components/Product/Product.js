import React from 'react';
import "./Product.css";
import { useStateValue } from '../../StateProvider';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import { v4 as uuidv4 } from 'uuid';
import TextTruncate from 'react-text-truncate';

function Product({ id, title, image, price, rating, global_ratings }) {
  const [, dispatch] = useStateValue();

  const addToCart = () => {
    //Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        basketId: uuidv4(),
      },
    });
  };
  // return (
  //   <div className='product'>
  //         <div className="prooduct__info">
  //             <p>{title}</p> 
  //             <p className="product__price">
  //                 <small>₹ </small>
  //                 <strong>{price}</strong>
  //             </p>
  //             <div className="product__rating">
  //             {Array(rating)
  //              .fill()
  //              .map((star) => (
  //               <StarRateOutlinedIcon key={star} />
  //           ))}
  //             </div>
  //           </div>
  //           <img
  //                 src={image}
  //                 alt=" "
  //           />
  //         <button onClick={addToCart}>
  //             Add to Cart
  //         </button>
  //   </div>
  // )
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p className="product__price">
          {/* <small>$</small> */}
          <strong>₹ {price}</strong>
        </p>

        <TextTruncate
          className="product__title"
          line={3}
          element="p"
          truncateText="..."
          text={title}
        />

        {/* <p className="product__title"></p> */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((star) => (
              <StarRateOutlinedIcon key={star} />
            ))}
           <span>{global_ratings}</span>
        </div>
      </div>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;

