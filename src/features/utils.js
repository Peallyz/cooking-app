export const ingredientMesureArray = (mesures, ingredients) => {
    const newArray = [];
    const newIngr = ingredients.filter((ingr) => ingr !== "" && ingr !== " ");
    const newMes = mesures.filter((mes) => mes !== "" && mes !== " ");

    for (let i = 0; i < newIngr.length; i++) {
        newArray.push(`${newIngr[i]} : ${newMes[i]}`);
    }
    return newArray;
};
