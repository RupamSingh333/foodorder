import React, { useState } from "react";
import Header from "../src/components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartItems = [
    { id: 'c1', name: "Sushi", amount: 2, price: 12.99 },
    // { id: 'c2', name: "Burger", amount: 1, price: 9.99 },
  ];

  return (
    
    <CartProvider>
      {cartIsShown && <Cart items={cartItems} onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
