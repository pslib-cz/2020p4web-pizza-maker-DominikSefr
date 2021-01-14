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
const AddItems = () => {
    const [list, setList] = React.useState(initiallist);
    const [name, setName] = React.useState('');
    const [category, setCategory] = React.useState('');
   
    function handleChange(event) {
      setName(event.target.value);
    }
   
    function handleAdd() {
      const newList = list.concat({ name, category });
      setList(newList);
   
    }
    return (
        <div>
          <AddItem
            name={name}
            category={category}
            onChange={handleChange}
            onAdd={handleAdd}
          />
     
          <List list={list} />
        </div>
      );
    };
     
    const AddItem = ({category, name, onChange, onAdd }) => (
      <div>
        <input type="text" value={category} onChange={onChange} />
        <input type="text" value={name} onChange={onChange} />
        <button type="button" onClick={onAdd}>
          Add
        </button>
      </div>
    );
     
    const List = ({ list }) => (
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.category} - {item.name}</li>
        ))}
      </ul>
  );
export default AddItems;