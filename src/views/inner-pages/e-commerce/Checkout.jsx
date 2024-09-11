import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import BillingDetails from "../../../components/e-commerce/checkout/BillingDetails";
import Payment from "../../../components/e-commerce/checkout/Payment";
import Header from "../../../components/e-commerce/Header";
import AppContext from "../../../components/context/AppContext";

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    orderNote: "",
  });

  const { InsertOrder } = useContext(AppContext);

  const handleChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await InsertOrder({
      client_name: billingDetails.firstName + " " + billingDetails.lastName,
      client_email: "",
      client_phone: billingDetails.phone,
      client_address:
        billingDetails.address +
        " " +
        billingDetails.city +
        " " +
        billingDetails.state +
        " ",
      notes: billingDetails.orderNote,
    });
  };

  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      <Header />

      <div className="checkout-section pt-200 pb-100 lg-pt-180 sm-pb-50">
        <div className="container">
          <div className="checkout-toggle-area mb-80 md-mb-60">
            {/* Add any additional components here */}
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <h2 className="main-title">Billing Details</h2>
                <BillingDetails
                  billingDetails={billingDetails}
                  onChange={handleChange}
                />
              </div>

              <div className="col-xxl-4 col-lg-5 ms-auto">
                <div className="order-confirm-sheet md-mt-60">
                  <h2 className="main-title">Order Details</h2>
                  <Payment />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
