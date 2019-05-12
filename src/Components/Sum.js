import React, { Component } from "react";

const Sum = props => {
  return (
    <div className="sum-content">
      <div className="barre-basket" />
      <div className="product-sum">
        <p>Sous-total </p>
        <span>{Number(props.total).toFixed(2)} €</span>
      </div>
      <div className="delivery-sum">
        <p>Frais de livraison</p>
        <span> 2,50 € </span>
      </div>
      <div className="barre-basket" />
      <div className="total-sum">
        <p>Total</p>
        <span>{Number(props.total + 2.5).toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default Sum;
