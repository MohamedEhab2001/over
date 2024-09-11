import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const CartProduct = ({ product }) => {
  const order = product.order;
  const prod = product.product;
  const { cartDelete } = useContext(AppContext);
  return (
    <>
      <tr>
        <td className="product-thumbnails">
          <a href="#" className="product-img">
            <img
              src={prod.images.split(",")[0]}
              alt=""
              style={{ width: "100%" }}
            />
          </a>
        </td>
        <td className="product-info">
          <Link to={`/product-details?id=${prod.id}`} className="product-name">
            {prod.name}
          </Link>
          {/* <div className="serial">#859632007881</div> */}
          <ul className="style-none">
            <li className="size">Size: {order.size}</li>
            <li
              className="color d-flex"
              style={{
                alignItems: "center",
                gap: "15px",
              }}
            >
              Color:{" "}
              <div
                className="circle"
                style={{ backgroundColor: order.color }}
              ></div>
            </li>
          </ul>
        </td>
        <td className="price">
          <span>EGP {prod.price}</span>
        </td>
        <td className="quantity">
          <ul className="order-box style-none">
            <li>{/* <div className="btn value-decrease">-</div> */}</li>
            <li>
              <input
                type="number"
                value={order.quantity}
                disabled
                className="product-value val"
              />
            </li>
            <li>{/* <div className="btn value-increase">+ </div> */}</li>
          </ul>
        </td>
        <td className="price total-price">
          <span>
            EPG{" "}
            {(parseFloat(order.quantity) * parseFloat(prod.price)).toFixed(2)}
          </span>
        </td>
        <td>
          <button
            onClick={() => cartDelete(prod)}
            className="remove-product"
          >
            x
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartProduct;
