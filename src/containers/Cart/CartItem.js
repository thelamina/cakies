import React, { useState, useContext } from "react";
import { Collapse } from "@material-ui/core";

import { CartContext } from "../../contexts/CartContext";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='Cart-Item px-2 bg-white mb-2'>
      <div className='d-flex justify-content-space-between'>
        <p className='text-primary'>{product.name} </p>
        <button onClick={handleExpanded} className='d-inline-block'>
          More
        </button>
        <button
          onClick={() => removeProduct(product)}
          className='d-inline-block'
        >
          X
        </button>
      </div>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <div>
          <p>size</p>
        </div>
      </Collapse>
    </div>
  );
};

export default CartItem;
