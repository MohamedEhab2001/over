import React from "react";

const BillingDetails = ({ billingDetails, onChange }) => {
  return (
    <div className="user-profile-data">
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            placeholder="First Name*"
            name="firstName"
            value={billingDetails.firstName}
            onChange={onChange}
            className="single-input-wrapper"
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            placeholder="Last Name*"
            name="lastName"
            value={billingDetails.lastName}
            onChange={onChange}
            className="single-input-wrapper"
            required
          />
        </div>

        <div className="col-12">
          <input
            type="text"
            placeholder="Street Address*"
            name="address"
            value={billingDetails.address}
            onChange={onChange}
            className="single-input-wrapper"
            required
          />
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="Town/City*"
            name="city"
            value={billingDetails.city}
            onChange={onChange}
            className="single-input-wrapper"
            required
          />
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="State*"
            name="state"
            value={billingDetails.state}
            onChange={onChange}
            className="single-input-wrapper"
            required
          />
        </div>
        <div className="col-lg-4">
          <input
            type="text"
            placeholder="Zip Code*"
            name="zipCode"
            value={billingDetails.zipCode}
            onChange={onChange}
            className="single-input-wrapper"
          />
        </div>

        <div className="col-lg-12">
          <input
            type="tel"
            placeholder="Phone Number*"
            name="phone"
            value={billingDetails.phone}
            onChange={onChange}
            className="single-input-wrapper"
            required
          />
        </div>
        <div className="col-12">
          <div className="other-note-area">
            <p>Order Note (Optional)</p>
            <textarea
              name="orderNote"
              value={billingDetails.orderNote}
              onChange={onChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
