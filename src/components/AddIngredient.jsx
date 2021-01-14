import App from "../App";
import React from "react";

const initiallist = [
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
];
const ShowList = () => {
    const [list, setList] = React.useState(initiallist);

    return(
    <div> 
      <List list={list} />
    </div>
    );
}; 
 
  const List = ({ list }) => (

    <ul>
      {list.map((item) => (
        <li key={item.name}>
            <span>{item.category} - {item.name}</span>
            <br></br>
        <button onClick={() => AddtoBuy(item.category, item.name)}>Add</button>
        <hr></hr>
        </li>
      ))}
    </ul>
  );
  function AddtoBuy(cat, name) {
    const element = [];
    console.log(element);
      var obj = {category: {cat}, name: {name}}
    return(
        <div>
            {element}.push = {obj};
        </div>
    );
};
export default ShowList;