import React from "react";
import "./item-container.styles.css";
import {
  MdChevronRight,
  MdChevronLeft,
  MdCheckCircleOutline,
  MdCheckCircle,
} from "react-icons/md";

export const ItemContainer = (props) => {
  const handleQuantityDecrease = () => {
    props.handleQuantityDecrease(props.index);
  };

  const handleQuantityIncrease = () => {
    props.handleQuantityIncrease(props.index);
  };

  const toggleComplete = () => {
    props.toggleComplete(props.index);
  };

  const { item } = props;

  return (
    <div className="item-list">
      <div className="item-container">
        <div className="item-name" onClick={toggleComplete}>
          {item.isSelected ? (
            <>
              <MdCheckCircle />
              <span className="completed">{item.itemName}</span>
            </>
          ) : (
            <>
              <MdCheckCircleOutline />
              <span>{item.itemName}</span>
            </>
          )}
        </div>
        <div className="quantity">
          <button>
            <MdChevronLeft onClick={handleQuantityDecrease} />
          </button>
          <span> {item.quantity} </span>
          <button>
            <MdChevronRight onClick={handleQuantityIncrease} />
          </button>
        </div>
      </div>
    </div>
  );
};
