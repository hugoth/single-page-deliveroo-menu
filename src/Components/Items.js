import React from "react";

const Items = props => {
  const { item } = props;

  return (
    <div className="basket-content">
      <i onClick={() => props.onRemove(item)} className="fas fa-minus-circle" />
      <p>{item.value}</p>
      <i onClick={() => props.onAdd(item)} className="fas fa-plus-circle" />
      <p>{item.title}</p>

      <p className="price-item">
        {Number(item.price * item.value).toFixed(2)} €
      </p>
    </div>
  );
};

export default Items;
