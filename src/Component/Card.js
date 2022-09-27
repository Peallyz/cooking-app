import React from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { setToggleModal, setCurrentModal } from "../features/modal.slice";
import { Link } from "react-router-dom";

function Card({ recette }) {
    const dispatch = useDispatch();
    const toggleModal = useSelector((state) => state.modal.modal);
    const currentModal = useSelector((state) => state.modal.current);

    const ingredientsArray = [
        recette.strIngredient1,
        recette.strIngredient2,
        recette.strIngredient3,
        recette.strIngredient4,
        recette.strIngredient5,
        recette.strIngredient6,
        recette.strIngredient7,
        recette.strIngredient8,
        recette.strIngredient9,
        recette.strIngredient10,
        recette.strIngredient11,
        recette.strIngredient12,
        recette.strIngredient13,
        recette.strIngredient14,
        recette.strIngredient15,
        recette.strIngredient16,
        recette.strIngredient17,
        recette.strIngredient18,
        recette.strIngredient19,
        recette.strIngredient20,
    ];

    const mesuresArray = [
        recette.strMeasure1,
        recette.strMeasure2,
        recette.strMeasure3,
        recette.strMeasure4,
        recette.strMeasure5,
        recette.strMeasure6,
        recette.strMeasure7,
        recette.strMeasure8,
        recette.strMeasure9,
        recette.strMeasure10,
        recette.strMeasure11,
        recette.strMeasure12,
        recette.strMeasure13,
        recette.strMeasure14,
        recette.strMeasure15,
        recette.strMeasure16,
        recette.strMeasure17,
        recette.strMeasure18,
        recette.strMeasure19,
        recette.strMeasure20,
    ];

    return (
        <div>
            <div className="card">
                <h3>{recette.strMeal}</h3>
                <h4>{recette.strArea}</h4>
                <p className="catagory-meal">{recette.strCategory}</p>
                <img src={recette.strMealThumb} alt="recette" />

                <button
                    onClick={() => {
                        dispatch(setToggleModal(true));
                        dispatch(setCurrentModal(recette.idMeal));
                    }}
                >
                    Ingredients and mesures
                </button>
                <button>
                    <Link
                        to={recette.strMeal.replace(/\s+/g, "-")}
                        state={{
                            recette,
                            mesure: mesuresArray,
                            ingredient: ingredientsArray,
                        }}
                    >
                        Read the full instructions
                    </Link>
                </button>
            </div>
            {toggleModal && currentModal === recette.idMeal && (
                <Modal
                    currentModal={currentModal}
                    recette={recette}
                    mesures={mesuresArray}
                    ingredients={ingredientsArray}
                />
            )}
        </div>
    );
}

export default Card;
