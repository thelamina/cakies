import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);
  return (
    <div>
      <div className='Cart'>
        <img src='assets/images/icon1.svg' alt='' className='ml-auto d-block' />
        <div className='text-center'>
          <img src='assets/images/logo.svg' alt='' className='Cart-Logo' />
          <p className='Cart-Title'>
            Select and cake and get it dlivered to your door step
          </p>
          <img src='assets/images/icon3.svg' alt='' />
        </div>
        <div className='Cart-Basket container'>
          <p className='text-white'>Basket Items</p>
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
            ) : (
              <div className='p-3 text-center text-muted'>
              No items added yet.
            </div>
          )}
          <p>Total: {total}</p>

        </div>
      </div>
    </div>
  );
};

export default Cart;
