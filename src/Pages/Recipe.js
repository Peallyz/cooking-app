import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ingredientMesureArray } from "../features/utils";

const Recipe = () => {
    const location = useLocation();
    console.log(location);

    const [ingredient, setIngredient] = useState([]);

    useEffect(() => {
        const newArray =
            location.state.mesure &&
            location.state.ingredient &&
            ingredientMesureArray(
                location.state.mesure,
                location.state.ingredient
            );
        setIngredient(newArray);
    }, [location.state.mesure, location.state.ingredient]);

    console.log(ingredient);

    return (
        <div className="recipies">
            <h3>{location.state.recette.strMeal}</h3>
            <div className="recipies__content">
                <div className="recipies__content--infos">
                    <ul>
                        {ingredient &&
                            ingredient.map((el, index) => (
                                <li key={index}>
                                    <strong>{el}</strong>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="recipies__content--pic">
                    <img
                        src={location.state.recette.strMealThumb}
                        alt={location.state.recette.strMeal}
                    />
                </div>
            </div>
            <div className="instruction">
                <p>{location.state.recette.strInstructions}</p>
                <a
                    target="_blank"
                    href={location.state.recette.strYoutube}
                    rel="noreferrer noopener"
                >
                    Find the recipe on YouTube
                </a>
            </div>
        </div>
    );
};

export default Recipe;
