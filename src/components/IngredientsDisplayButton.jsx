import AddIng from "./AddIng";
import IngredientsDisplay from "./IngredientsDisplay"
import React from "react";

const IngredientsDisplayButton = ({name, category}) => {
    return(
        <div>
            <IngredientsDisplay name = {name} category={category} />
            <button onClick = {e => {AddIng({name: name, category: category})}}>Add</button>
        </div>
    )
}
export default IngredientsDisplayButton;