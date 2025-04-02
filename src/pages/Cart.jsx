import React, { useState } from "react";
import "./Cart.css";

const Cart = ({cartItems,setCartItems}) => {
 

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCharge = totalPrice > 0 ? 5 : 0;
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😞</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>

                </div>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total: <span>${totalPrice.toFixed(2)}</span></p>
            <p>Delivery: <span>${deliveryCharge.toFixed(2)}</span></p>
            <h3>Grand Total: <span>${grandTotal.toFixed(2)}</span></h3>
            <button className="checkout-btn" onClick={()=>{
              alert('Your Payment is On Process!')
            }}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
