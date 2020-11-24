import React from "react";

const Recipe = ({ title, image, ingredients }) => {
    return (
        <>
            <div className="recipe">
                <h1>{title}</h1>
                <div className="ul">
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li className="text" key={Math.random() * 10}>
                                {ingredient.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <img className="image" src={image} alt="" />
            </div>
        </>
    );
};

export default Recipe;
