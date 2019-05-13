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
            {props.restaurant ? (
              <h2>{props.restaurant.name}</h2>
            ) : (
              <div>En chargement...</div>
            )}

            {props.restaurant ? <p>{props.restaurant.description}</p> : ""}
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
