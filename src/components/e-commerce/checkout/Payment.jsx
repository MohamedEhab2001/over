import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Payment = () => {
  const { orderLoading } = useContext(AppContext);
  return (
    <div className="order-review">
      <div className="payment-option">
        <ul className="payment-list style-none">
          <li>
            <input
              type="radio"
              name="paymenttype"
              defaultValue="directbank"
              defaultChecked="checked"
              className="payment-radio-button"
              id="directbank"
            />
            <label htmlFor="directbank">Cash on Delivery</label>
            <p>Make your payment directly after receiving the order.</p>
          </li>
        </ul>
      </div>

      <p className="policy-text">
        Your personal data will be used for your order and to support your
        experience through this website as described in our privacy policy.
      </p>

      <button
        className="theme-btn-seven w-100"
        type="submit"
        disabled={orderLoading}
      >
        {orderLoading ? "..." : "Place order"}
      </button>
    </div>
  );
};

export default Payment;
