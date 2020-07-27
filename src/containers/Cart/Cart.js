import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/FormatCurrency";
const Cart = () => {
  const { total, cartItems, clearCart } = useContext(CartContext);
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
            <div>
              {cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
              <hr />
              <form>
                <div className='form-group'>
                  <label htmlFor='address' className='text-white'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    id='address'
                    placeholder='Delivery Address'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='city' className='text-white'>
                    City
                  </label>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    id='city'
                    placeholder='No City Selected'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='phone' className='text-white'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    placeholder=''
                    className='form-control rounded-0'
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Thanks for your patronage");
                    clearCart();
                  }}
                  className='d-block w-100 btn btn-white font-weight-bold display-2'
                >
                  Pay {formatCurrency(total)}
                </button>
              </form>
            </div>
          ) : (
            <div className='p-3 text-center text-white'>
              No items added yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
