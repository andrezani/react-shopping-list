import React from "react";

import { MdAddShoppingCart } from "react-icons/md";

import "./add-item.styles.css";

export const AddNewItem = (props) => {
  const handleAddButtonClick = () => {
    props.handleAddButtonClick();
  };
  return (
    <div className="add-item-box">
      <input
        className="add-item-input"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
      <MdAddShoppingCart onClick={handleAddButtonClick} />
    </div>
  );
};
