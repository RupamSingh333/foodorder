import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./Auth/AuthContext";
import Header from "../src/components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import LoginForm from "./Auth/LoginForm";
import SignupForm from "./Auth/SignupForm";
import ProductList from "./Products/ProductList";
import AddProductForm from "./Products/AddProductForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartItems = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 }
  ];

  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<AddProductForm />} />
            <Route path="/" element={<Meals />} />
          </Routes>
          {cartIsShown && <Cart items={cartItems} onCloseCart={hideCartHandler} />}
        </Router>
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
