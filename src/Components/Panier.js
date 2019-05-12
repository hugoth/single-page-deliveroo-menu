import React from "react";
import Items from "./Items";
import Sum from "./Sum";

const Panier = props => {
  return (
    <div>
      {props.products.length < 1 ? (
        <div>
          <h3>Le panier est vide</h3>
        </div>
      ) : (
        <div className="panier-content">
          <button className="button-basket"> Valider mon panier</button>
          <div>
            {props.products.map((item, index) => {
              return (
                <Items
                  item={item}
                  onAdd={props.onAdd}
                  onRemove={props.onRemove}
                  products={props.products}
                />
              );
            })}
          </div>
          <Sum />
        </div>
      )}
    </div>
  );
};
export default Panier;
