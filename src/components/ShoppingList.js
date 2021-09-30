import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, OnItemFormSubmit, handleItemCategoryChange, handleItemNameChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searched = itemsToDisplay.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm items={items} OnItemFormSubmit={OnItemFormSubmit} handleItemNameChange={handleItemNameChange} handleCategoryChange={handleCategoryChange}/>
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        
        {searched.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        
      </ul>
    </div>
  );
}

export default ShoppingList;
