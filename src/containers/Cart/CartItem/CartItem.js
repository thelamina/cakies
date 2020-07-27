import React, { useState, useContext } from "react";
import { Collapse } from "@material-ui/core";

import { CartContext } from "../../../contexts/CartContext";
import "./CartItem.css";
import { formatCurrency } from "../../../utils/FormatCurrency";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='px-2 bg-white mb-2'>
      <div className='CartItem'>
        <p className='text-primary'>{product.name} </p>
        <button onClick={handleExpanded} className='d-inline-block'>
          {!expanded ? "More" : "Less"}
        </button>
        <button
          onClick={() => removeProduct(product)}
          className='d-inline-block'
        >
          X
        </button>
      </div>
      <Collapse
        className='CartItem-Collapse'
        in={expanded}
        timeout='auto'
        unmountOnExit
      >
        <div className='Size'>
          <label htmlFor=''>Size</label>
          <select name='' id=''>
            <option value=''>Option1</option>
          </select>
        </div>
        <div className='Quantity'>
          <label htmlFor=''>Quantity</label>
          <input type='number' disabled value={product.quantity} />
          <button onClick={() => increase(product,1)} className='bg-transparent'>
            +
          </button>
          {product.quantity > 1 && (
            <button onClick={() => decrease(product)}>
              <img src='asset/icons/arrrow.svg' alt='' />
            </button>
          )}
        </div>
        <div className='Price'>
          <label htmlFor=''>Price</label>
          <input value={formatCurrency(product.price)} />
        </div>
      </Collapse>
    </div>
  );
};

export default CartItem;
