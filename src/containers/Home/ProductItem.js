import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { formatCurrency } from "../../utils/FormatCurrency";

const ProductItem = ({ product }) => {
  const { cartItems, addProduct } = useContext(CartContext);

  const isInCart = (product) => {
    return cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className='col'>
      <div className='Creamy-Item-Image'>
        <img src={product.photo} alt='' />
        {!isInCart(product) ? (
          <button onClick={() => addProduct(product)} className='btn btn-light'>
            Order Cake
          </button>
        ) : (
          <button disabled className='btn btn-light'>
            Added to cart
          </button>
        )}
      </div>
      <p className='Creamy-Item-Name'>{product.name}</p>
      <a href='/category' className='Creamy-Item-Category'>
        {product.category}
      </a>
      <p className='Creamy-Item-Price'>{formatCurrency(product.price)}</p>
    </div>
  );
};

export default ProductItem;
