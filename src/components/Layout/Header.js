import React, { Fragment } from "react";
import mealsImage from "../../assest/meals.jpg";
import classes from "../Layout/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Drawer from './Drawer';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Swiggy</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <Drawer />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
