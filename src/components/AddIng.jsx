import { useContext, useState } from "react"
import { IngredientsContext } from "../IngredientsContext";

const AddIng = () => {
    const context = useContext(IngredientsContext);
    const [ingredients, setIngredients] = context.ingredients;

    const AddIngredient = e =>{
        e.preventDefault();
        setIngredients(prevIngredients => [...prevIngredients, {name:e.name, category:e.category}]);
    }
    return(
        <form onSumbit={AddIngredient}>
            <input type="text" name="name"/>
            <input type="text" name="category"/>
            <button>Submit</button>
        </form>
    )
}
export default AddIng;