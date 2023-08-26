import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ id, value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <img src={img} alt="Item" />
      <h4>{title}</h4>
    </div>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={() => increment(id)}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Cheese Burger", img: burger1, value: 0, price: 10 },
    { id: 2, title: "Royale Burger", img: burger2, value: 0, price: 12 },
    { id: 3, title: "Classic Burger with French Fries", img: burger3, value: 0, price: 14 },
  ]);

  const increment = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  const decrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.value > 0
          ? { ...item, value: item.value - 1 }
          : item
      )
    );
  };

  const subTotal = cartItems.reduce(
    (total, item) => total + item.value * item.price,
    0
  );
  const tax = (subTotal * 0.19).toFixed(2);
  const shippingCharges = 5;
  const total = (subTotal + parseFloat(tax) + shippingCharges).toFixed(2);


  return (
    <section className="cart">
      <main>
        <h2>My Cart</h2>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            value={item.value}
            increment={increment}
            decrement={decrement}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>€{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>€{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>€{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
