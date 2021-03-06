import React from "react";
import Items from "./Items";
import Sum from "./Sum";

const Panier = props => {
  return (
    <div>
      {props.products.length === 0 ? (
        <div className="empty-basket">
          <button className="button-empty-basket"> Valider mon panier</button>
          <h4>Le panier est vide</h4>
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

          <Sum products={props.products} />
        </div>
      )}
    </div>
  );
};
export default Panier;
