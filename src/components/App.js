import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [submittedItem, setSubmittedItem] = useState([])

  const onItemFormSubmit = (e) => {
    e.preventDefault()
    const formItem = { id: 7, name: itemName, category: itemCategory}
    setSubmittedItem(formItem)
    setItems({...items, submittedItem})
    setItemName('')
    setItemCategory('')
  }

  const handleItemNameChange = (e) => {
    setItemName(e.target.value)
  }

  const handleItemCategoryChange = (e) => {
    console.log(e.target.value)
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onItemFormSubmit={onItemFormSubmit} handleItemCategoryChange={handleItemCategoryChange} handleItemNameChange={handleItemNameChange} />
    </div>
  );
}

export default App;
