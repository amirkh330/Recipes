import React from "react";
import Recipe from "./Recipe";

const Foods = ({ recipes }) => {
  
    return (
        <>
            <div className="recipes" >
                {recipes.map((recipe) => (
                    <Recipe
                        title={recipe.recipe.label}
                        ingredients={recipe.recipe.ingredients}
                        key={Math.random()*10}
                        image ={recipe.recipe.image}
                       
                    />
                ))}
            </div>
        </>
    );
};

export default Foods;
