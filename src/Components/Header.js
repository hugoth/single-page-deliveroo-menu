import React from "react";

const Header = props => {
  return (
    <div>
      <div className="barre-logo">
        <img
          src="https://pngimage.net/wp-content/uploads/2018/06/logo-deliveroo-png-4.png"
          className="logo"
          alt="logo-deliveroo"
        />
      </div>
      <div className="header">
        <div className="restaurant-presentation">
          <div className="text-restaurant">
            <h2>Le Pain Quotidien - Montorgueil</h2>
            <p>
              Profitez de chaque plaisir de la vie quotidienne. Le Pain
              Quotidien propose des ingrédients simples et sains, du bon pain,
              des fruits et des légumes frais et de saison issus de
              l’agriculture biologique.
            </p>
          </div>
          <div className="image-restaurant">
            <img
              src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
              alt="Plat du restaurant"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// <button
// onClick={() => console.log(props.state.restaurant.restaurant.desci)}
// >
// test props
// </button>
