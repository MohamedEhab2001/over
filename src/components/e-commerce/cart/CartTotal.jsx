import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";

const CartTotal = () => {
  const { cart } = useContext(AppContext);
  const [shippingCost, setShippingCost] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");

  const total = cart.reduce((a, p) => {
    return a + parseFloat(p.product.price) * parseFloat(p.order.quantity);
  }, 0); // Initial value for 'a' is 0

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);

    // تحديد تكلفة الشحن بناءً على المدينة
    if (city === "Cairo" || city === "Alexandria" || city === "Giza") {
      setShippingCost(50);
    } else {
      setShippingCost(75);
    }
  };

  useEffect(() => {}, [shippingCost]);

  const egyptCities = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Port Said",
    "Suez",
    "Fayoum",
    "Damietta",
    "Ismailia",
    "Sharqia",
    "Gharbia",
    "Dakahlia",
    "Monufia",
    "Qalyubia",
    "Beheira",
    "Kafr El Sheikh",
  ];

  useEffect(() => {
    if (shippingCost > 0) {
      localStorage.setItem(
        "shipping",
        JSON.stringify({ shippingCost, selectedCity })
      );
    }
  }, [shippingCost, selectedCity]);

  return (
    <>
      <div className="shipping-select mb-20 d-flex" style={{ gap: "15px" }}>
        <label htmlFor="city">Choose your city:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a city</option>
          {egyptCities.map((city) => {
            return <option value={city}>{city}</option>;
          })}
        </select>
      </div>
      <table className="cart-total-table">
        <tbody>
          <tr>
            <th>Total</th>
            <td>EGP {total}</td>
          </tr>
          <tr>
            <th>Shipping Cost</th>
            <td>EGP {shippingCost}</td>
          </tr>
          <tr>
            <th>Grand Total</th>
            <td>EGP {total + shippingCost}</td>
          </tr>
        </tbody>
      </table>
      {/* <!-- /.cart-total-table --> */}

      {/* Select box لاختيار المحافظة */}

      {cart.length ? (
        <Link to="/check" className="theme-btn-seven checkout-process mt-30">
          Checkout
        </Link>
      ) : ""}
    </>
  );
};

export default CartTotal;
