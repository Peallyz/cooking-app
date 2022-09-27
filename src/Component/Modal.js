import React, { useState } from "react";
import { useEffect } from "react";
import { setCurrentModal, setToggleModal } from "../features/modal.slice";
import { useDispatch } from "react-redux";
import { ingredientMesureArray } from "../features/utils";

const Modal = ({ recette, mesures, ingredients }) => {
    const dispatch = useDispatch();

    const [ingredientList, setIngredientList] = useState([]);

    useEffect(() => {
        const newArray =
            mesures &&
            ingredients &&
            ingredientMesureArray(mesures, ingredients);

        setIngredientList(newArray);
    }, [mesures, ingredients]);

    return (
        <div className="modal">
            <div className="recipe__info">
                <h3>Ingredients and mesures for {recette.strMeal}</h3>
                <div className="recipe__content">
                    <ul>
                        {ingredientList &&
                            ingredientList.map((el, index) => (
                                <li key={index}>
                                    <strong>{el}</strong>
                                </li>
                            ))}
                    </ul>
                    <img src={recette.strMealThumb} alt={recette.strMeal} />
                </div>
                <button
                    onClick={() => {
                        dispatch(setToggleModal(false));
                        dispatch(setCurrentModal(null));
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrows-minimize"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#1c0221"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="5 9 9 9 9 5" />
                        <line x1="3" y1="3" x2="9" y2="9" />
                        <polyline points="5 15 9 15 9 19" />
                        <line x1="3" y1="21" x2="9" y2="15" />
                        <polyline points="19 9 15 9 15 5" />
                        <line x1="15" y1="9" x2="21" y2="3" />
                        <polyline points="19 15 15 15 15 19" />
                        <line x1="15" y1="15" x2="21" y2="21" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Modal;
