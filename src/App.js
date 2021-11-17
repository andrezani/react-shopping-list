import React, { Component } from "react";

import { AddNewItem } from "./components/add-item/add-item.component";
import { ItemContainer } from "./components/item-container/item-container.component";

import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      inputValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleAddButtonClick = () => {
    const newItem = {
      itemName: this.state.inputValue,
      quantity: 1,
      isSelected: false,
    };

    const itemIsEmpty = newItem.itemName === "";
    if (itemIsEmpty) {
      return alert("Item field is empty");
    }

    const itemExists = this.state.items.some(
      (items) => items.itemName === newItem.itemName
    );
    if (itemExists) {
      const index = this.state.items.findIndex(
        (item) => item.itemName === this.state.inputValue
      );
      return this.handleQuantityIncrease(index);
    }

    const newItems = [...this.state.items, newItem];

    this.setState({
      items: newItems,
      inputValue: "",
    });
  };

  handleQuantityIncrease = (index) => {
    const newItems = [...this.state.items];
    newItems[index].quantity++;

    this.setState({
      items: newItems,
      inputValue: "",
    });
  };

  handleQuantityDecrease = (index) => {
    const newItems = [...this.state.items];
    newItems[index].quantity--;

    const deleteEmptyQuantity = newItems.filter((item) => item.quantity !== 0);

    this.setState({
      items: deleteEmptyQuantity,
    });
  };

  toggleComplete = (index) => {
    const newItems = [...this.state.items];

    newItems[index].isSelected = !newItems[index].isSelected;

    this.setState({
      items: newItems,
    });
  };

  render() {
    return (
      <div className="app-background">
        <div className="main-container">
          {this.state.items.map((item, index) => (
            <ItemContainer
              item={item}
              index={index}
              handleQuantityDecrease={this.handleQuantityDecrease}
              handleQuantityIncrease={this.handleQuantityIncrease}
              toggleComplete={this.toggleComplete}
            />
          ))}
          <AddNewItem
            value={this.state.inputValue}
            placeholder="Add new products"
            handleChange={this.handleChange}
            handleAddButtonClick={this.handleAddButtonClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
