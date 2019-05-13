import React from "react";
import Meals from "./Meals";
import Panier from "./Panier";

const Menu = props => {
  return (
    <div className="content-menu">
      <div className="cards">
        <div>
          {Object.entries(props.data).map(menuKey => {
            return (
              <div className="content-cards">
                <h2>{menuKey[1].length > 0 ? menuKey[0] : ""}</h2>
                <div className="container-test">
                  <Meals data={menuKey[1]} onAddItem={props.onClick} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="panier">
        <Panier
          products={props.products}
          onAdd={props.onAdd}
          onRemove={props.onRemove}
        />
      </div>
    </div>
  );
};

export default Menu;
