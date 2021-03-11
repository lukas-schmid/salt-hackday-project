import React from "react";
import "./Footer.css";
import KitchenIcon from "@material-ui/icons/Kitchen";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="footer__fridge">
        <KitchenIcon className="footer__fridge--icon" />
        <p className="footer__fridge--text">Your Fridge</p>
      </div>
      <div className="footer__recipes">
        <ReceiptIcon className="footer__fridge--icon" />
        <p className="footer__fridge--text">Recipes</p>
      </div>
      <div className="footer__shoppingList">
        <ShoppingCartIcon className="footer__fridge--icon" />
        <p className="footer__fridge--text">Shopping List</p>
      </div>
    </footer>
  );
};

export default Footer;
