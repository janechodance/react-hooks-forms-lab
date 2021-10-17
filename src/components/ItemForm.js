import React from "react";
import { useState } from "react/cjs/react.development";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  
  const [itemName, setItemName] = useState("")
  const [itemCategory,setItemCategory] = useState("Produce")
function handleItemChange(event){
  setItemName(event.target.value)
}
function handleCategoryChange(event){
  setItemCategory(event.target.value)
}
function handleSubmit(event) {
  event.preventDefault();
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };
  return onItemFormSubmit(newItem)
  // props.onItemFormSubmit(newItem);
  // setItemName("");
  // setItmeCategory("");
}
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value="Produce" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
