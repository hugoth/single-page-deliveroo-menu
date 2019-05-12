import React from "react";

const Items = props => {
  const { item } = props;

  return (
    <div className="basket-content">
      <i onClick={() => props.onRemove(item)} class="fas fa-minus-circle" />
      <p>{item.value}</p>
      <i onClick={() => props.onAdd(item)} class="fas fa-plus-circle" />
      <p>{item.title}</p>
      <p className="price-item">
        {parseFloat(item.price).toFixed(2) * item.value} €
      </p>
    </div>
  );
};

export default Items;
