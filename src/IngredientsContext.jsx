import React, {useState, createContext} from "react";

export const IngredientsContext = createContext();

export const IngredientsProvider = temp => {
    const[ingredients, setIngredients] = useState([
        {
            name: "Chicken",
            category: "Meat",
        },
        {
            name: "Cheddar",
            category: "Cheese",
        },
        {
            name: "Beef",
            category: "Meat"
        },
        {
            name: "Tomato",
            category: "Vegetable"
        },
        {
            name: "RED",
            category: "Base"
        }
    ]);
    const [cart, setCart] = useState([]);
    return(
        <IngredientsContext.Provider value={{ingredients: [ingredients, setIngredients], cart: [cart, setCart]}}>
            {temp.children}
        </IngredientsContext.Provider>
    )
} 