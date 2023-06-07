import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const { items, onCloseCart } = props;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>37.98</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
