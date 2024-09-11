import React from "react";

const Colors = ({ colors, fn, order }) => {
  return (
    <ul className="style-none d-flex align-items-center color-custome-input">
      {colors?.length &&
        JSON.parse(colors).map((color, i) => {
          return (
            <li>
              <input
                type="radio"
                name="color"
                value={color}
                className="color-check-btn"
                checked={order.color === color}
                onChange={(e) => fn(e.target.value)}
              />
              <label style={{ background: color }}></label>
            </li>
          );
        })}
    </ul>
  );
};

export default Colors;
