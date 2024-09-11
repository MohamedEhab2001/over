import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/e-commerce/Header";
import CopyRightThree from "../components/footer/CopyRightThree";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>Over Brand</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />

      <div className="fancy-hero-two" style={{ marginTop: "150px" }}>
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">Heeeey</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading">We got your order</h1>
                <p className="sub-heading">
                  Thanks for choosing us, one of our team will contact with you
                  within 24 hours
                </p>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          {/* <div className="container inner-btn-black">
            <FooterSeven />
          </div> */}

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
    </div>
  );
};

export default OrderConfirmation;
