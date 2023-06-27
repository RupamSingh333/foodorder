import React, { useState, useEffect } from "react";
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
import Footer from "./components/Layout/Footer";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <ClipLoader
            // color={color}
            loading={isLoading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
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
                {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
                <Footer />
              </Router>
            </CartProvider>
          </AuthContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;
