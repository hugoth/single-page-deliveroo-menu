import React, { Component } from "react";

const Sum = props => {
  let total = 0;
  const { products } = props;
  products.forEach(element => {
    return (total += element.price * element.value);
  });
  return (
    <div className="sum-content">
      <div className="barre-basket" />
      <div className="product-sum">
        <p>Sous-total </p>
        <span>{Number(total).toFixed(2)} €</span>
      </div>
      <div className="delivery-sum">
        <p>Frais de livraison</p>
        <span> 2,50 € </span>
      </div>
      <div className="barre-basket" />
      <div className="total-sum">
        <p>Total</p>
        <span>{Number(total + 2.5).toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default Sum;
