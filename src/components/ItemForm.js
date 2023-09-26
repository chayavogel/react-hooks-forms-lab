import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleNameInput(event) {
    setItemName(event.target.value)
  }

  function handleCategorySelection(event) {
    setItemCategory(event.target.value)
  }

  function addItem(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={addItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameInput}/>
      </label>
      <label>
        Category:
        <select name="category" onChange={handleCategorySelection}>
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

// Updatestate, submit form creates obj and updates the list
