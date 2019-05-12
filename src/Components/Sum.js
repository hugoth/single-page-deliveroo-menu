import React, { Component } from "react";

const Sum = props => {
  return (
    <div className="sum-content">
      <div className="barre-basket" />
      <div className="product-sum">
        <p>Sous-total </p>
        <span>{props.total} €</span>
      </div>
      <div className="delivery-sum">
        <p>Frais de livraison</p>
        <span> 2,50 € </span>
      </div>
      <div className="barre-basket" />
      <div className="total-sum">
        <p>Total</p>
        <span>{props.total + 2.5}€</span>
      </div>
    </div>
  );
};

export default Sum;
