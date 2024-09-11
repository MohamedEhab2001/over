import React from "react";
import flashSale from "../../assets/over/saleProduct.jpg";
const FlashSaleBanner = () => {
  return (
    <div className="banner-bg row no-gutters" data-aos="fade-up">
      <div className="col-lg-6 right-half position-relative order-lg-2">
        <div className="fancy-text font-recoleta">Winter Time</div>
        <div className="sale-text">Reday ?</div>
        <h3>
          Winter hit <br /> collection designs go on...
        </h3>
        <p className="pt-20 pb-35">Find your best designs from OVER </p>
        <a
          href="https://www.instagram.com/over_2_0?igsh=YjIxM3dmMzhqcWEx"
          target="_blank"
          className="shop-btn-two tran3s"
        >
          Follow Us
        </a>
      </div>
      <div
        className="col-lg-6 left-half position-relative order-lg-1"
        style={{ background: `url(${flashSale})` }}
      ></div>
    </div>
  );
};

export default FlashSaleBanner;
