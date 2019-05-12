import React, { Component } from "react";

const Sum = props => {
  return (
    <div className="sum-content">
      <div className="product-sum">
        <p>Sous-total XXX €</p>
        <p>Frais de livraison 2,50 € </p>
      </div>
      <div className="total-sum">
        <p>Total XXX €</p>
      </div>
    </div>
  );
};

export default Sum;
