import React from "react";

const Size = ({ sizes, fn, order }) => {
  return (
    <ul className="style-none d-flex align-items-center size-custome-input">
      {sizes?.split(",")?.map((size) => {
        return (
          <li>
            <input
              type="radio"
              name="size"
              value={size}
              className="size-check-btn"
              checked={order.size === size}
              onChange={(e) => fn(e.target.value)}
            />
            <label>{size}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default Size;
