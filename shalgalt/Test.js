import React, { useState } from "react";
import "./Test.css"

export default function App() {
  const itemList = [
    "apple",
    "pineapple",
    "orange",
    "banana",
    "mango",
  ];

  const [filteredList, setFilteredList] =  useState(itemList);

  const filterBySearch = (e) => {

    const query = e.target.value;

    var updatedList = [...itemList];

    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(updatedList);
  };

  return (
    <div className="Test">
      <div className="search">
        <div className="search-text">Search</div>
        <input id="search-input" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}