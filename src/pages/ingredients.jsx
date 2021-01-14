import AppNavbar from "../components/AppNavbar";
import React, { useState, useContext } from "react";
import { IngredientsContext } from "../IngredientsContext";
import IngredientsDisplay from "../components/IngredientsDisplay";
import AddIng from "../components/AddIng";

const Ingredients = () => {
    const context = useContext(IngredientsContext);
    const [ingredients, setIngredients] = context.ingredients;
    return(
        <>
            <AppNavbar/>
            {ingredients.map((m,i) => (
                <IngredientsDisplay key={i} name={m.name} category={m.category} />
            ))}
            <AddIng/>
        </>
    )
}
export default Ingredients;