import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import CartProduct from "../../../components/e-commerce/cart/CartProduct";
import CartTotal from "../../../components/e-commerce/cart/CartTotal";
import Coupon from "../../../components/e-commerce/cart/Coupon";
import Header from "../../../components/e-commerce/Header";
import AppContext from "../../../components/context/AppContext";

const Cart = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const { cart } = useContext(AppContext);

  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>Cart || Over clothing Brand</title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* <!-- 
    =============================================
    Theme Main Menu
    ============================================== 
    --> */}
      <Header />

      {/* <!-- 
      =============================================
      Cart Page
      ============================================== 
      --> */}
      <div className="cart-section pt-200 pb-100 lg-pt-180 sm-pb-50">
        <div className="container">
          <form className="cart-list-form" onClick={handleSubmit}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan="2">Product</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>

                {cart.length ? (
                  <tbody>
                    {React.Children.toArray(
                      cart.map((product) => {
                        return <CartProduct product={product} />;
                      })
                    )}
                  </tbody>
                ) : (
                  <p>No products here yet</p>
                )}
              </table>
            </div>
            {/* <!-- /.table-responsive --> */}

            <div className="d-sm-flex justify-content-between cart-footer">
              {/* <Coupon /> */}
              {/* <!-- /.coupon-section --> */}

              <div className="cart-total-section d-flex flex-column sm-pt-40">
                <CartTotal />
              </div>
            </div>
            {/* <!-- /.cart-footer --> */}
          </form>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.cart-section --> */}
    </div>
  );
};

export default Cart;
