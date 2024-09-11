import React from "react";
import trouser from '../../assets/images/im.png'
const Hero = () => {
  return (
    <div className="hero-banner-fifteen lg-container">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <h1 className="hero-heading font-recoleta" data-aos="fade-right">
                New Winter Collection.
              </h1>
              <p
                className="hero-sub-heading"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                We helping client to find the best style.
              </p>
              <div
                className="d-sm-flex align-items-center"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <a href="#cat" className="shop-btn tran3s me-4">
                  Shop Now
                </a>
                {/* <a href="#" className="cart-btn tran3s">
                  +
                </a> */}
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="product-img-holder" data-aos="fade-left">
            <img src={trouser} alt="" className="product-img" style={{
              width: '100%',
              height: '135%',

              objectFit: 'cover',
            }} />
            {/* <div className="offer-sticker d-flex flex-column align-items-center justify-content-center">
              <span className="sn1">30%</span>
              <span className="sn2">OFF</span>
            </div> */}
          </div>
          {/* End .product-img-holder */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
