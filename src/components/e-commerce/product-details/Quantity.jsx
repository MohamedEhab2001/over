import React from "react";

const Quantity = ({ fn, order }) => {
  
  return (
    <div className="button-group">
      <ul className="style-none d-flex align-items-center">
        <li>
          <button
            className="value-decrease"
            onClick={() => fn(order.quantity - 1)}
          >
            -
          </button>
        </li>
        <li>
          <input
            type="number"
            min="1"
            max="22"
            value={order.quantity}
            className="product-value val"
            disabled
          />
        </li>
        <li>
          <button
            className="value-increase"
            onClick={() => fn(order.quantity + 1)}
          >
            +{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Quantity;
