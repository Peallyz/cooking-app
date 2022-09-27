import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Form() {
    const [recipe, setRecipe] = useState("");
    const [receipts, setReceipts] = useState();

    const getRecipe = (e) => {
        setRecipe(e.target.value);
    };

    useEffect(() => {
        axios
            .get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`
            )
            .then((res) => setReceipts(res.data.meals));
    }, [recipe]);

    return (
        <div className="recette">
            <form className="form">
                <input
                    type="text"
                    placeholder="Tapez le nom d'un aliment (en anglais)"
                    onChange={(e) => getRecipe(e)}
                />
            </form>

            <ul className="container__card">
                {receipts &&
                    receipts.map((recette) => (
                        <Card key={recette.idMeal} recette={recette} />
                    ))}
            </ul>
        </div>
    );
}

export default Form;
