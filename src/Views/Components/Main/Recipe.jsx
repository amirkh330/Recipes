import React from "react";
import style from '../../Styles/Recipe.module.css'

const Recipe = ({ title, image, ingredients }) => {
    return (
        <>
            <div className={style.recipe}>
                <h1>{title}</h1>
                <ul>
                    {ingredients.map((ingredient) => (
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
                <img className={style.image} src={image} alt="" />
            </div>
        </>
    );
};

export default Recipe;
