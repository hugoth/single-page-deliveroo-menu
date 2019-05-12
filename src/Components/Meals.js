import React, { Component } from "react";
import LinesEllipsis from "react-lines-ellipsis";

const Meals = props => {
  return (
    <div className="meals">
      {props.data.map(meal => {
        return (
          <li
            key={meal.id}
            onClick={() => {
              props.onAddItem(meal);
            }}
          >
            <div className="text-meals">
              <h3>{meal.title}</h3>
              <LinesEllipsis
                text={meal.description}
                maxLine="2"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />

              <div className="popular">
                <p id="font-price">{meal.price}</p>
                <div>
                  {meal.popular ? (
                    <p id="popular">
                      <i class="fas fa-star" /> Populaire
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div>
              {meal.picture ? <img src={meal.picture} alt="meal" /> : ""}
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Meals;
