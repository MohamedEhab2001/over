import React, { useContext, useState } from "react";
import Colors from "./Colors";
import Quantity from "./Quantity";
import Size from "./Size";
import AppContext from "../../context/AppContext";
import { toast } from "react-toastify";

const ProductGalleryContent = ({ product }) => {
  const [order, setOrder] = useState({
    color: null,
    quantity: 1,
    size: null,
  });

  const { cartAdd } = useContext(AppContext);

  const addToCart = () => {
    if (order.color && order.quantity && order.quantity > 0 && order.size) {
      cartAdd({ order, product });
    } else {
      toast.error("Please choose quantity , color and size");
    }
  };

  return (
    <div className="product-info ps-xl-5 md-mt-50">
      {/* <div className="stock-tag">In Stock</div> */}
      <h3 className="product-name">{product?.name}</h3>
      {/* <ul className="style-none d-flex align-items-center rating">
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true"></i>
        </li>
        <li>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </li>
        <li>
          <a href="#">(2 Customer Reviews)</a>
        </li>
      </ul> */}
      <div className="price">EGP {product?.price}</div>
      <p className="availability">Base price </p>
      <p className="description-text">{product?.description} </p>
      {/* <ul className="product-feature style-none">
        <li>Free delivery available</li>
        <li>Use promo-code and save up to 25%</li>
      </ul> */}

      <div className="customize-order">
        <div className="row">
          <div className="col-xl-11">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="quantity mt-25">
                  <h6>Quantity</h6>
                  <Quantity
                    fn={(q) => setOrder({ ...order, quantity: q })}
                    order={order}
                  />
                </div>
              </div>
              {/* End Quantity */}

              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="color-selection mt-25">
                  <h6>Colors</h6>
                  <Colors
                    colors={product?.colors}
                    fn={(c) => setOrder({ ...order, color: c })}
                    order={order}
                  />
                </div>
              </div>
              {/* End colors  */}

              <div className="col-xl-5 col-md-6 col-sm-4">
                <div className="size-selection mt-25">
                  <h6>Size</h6>
                  <Size
                    sizes={product?.sizes}
                    fn={(s) => setOrder({ ...order, size: s })}
                    order={order}
                  />
                </div>
              </div>
              {/* End Size */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.customize-order --> */}

      <div className="button-group mt-30 d-sm-flex align-items-center">
        <button
          className="cart-btn mt-15 me-sm-4 d-block"
          onClick={() => addToCart()}
        >
          Add To Cart
        </button>
        {/* <a href="#" className="wishlist-btn mt-15 d-block">
          Add To wishlist
        </a> */}
      </div>
    </div>
  );
};

export default ProductGalleryContent;
