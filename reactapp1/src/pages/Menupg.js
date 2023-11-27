import React, { useState } from 'react';
import { MenuList } from './data/Data'; // Make sure to provide the correct path

const Menupg = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      // If the item is not in the cart, add it
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      // If the item is already in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    }
  };

  return (
    <div>
      <h2>Menu</h2>
      <div>
        {MenuList.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.name} - Quantity: {cartItem.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menupg;
