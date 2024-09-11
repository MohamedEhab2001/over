import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/e-commerce/Header";
import PortfolioFour from "../../../components/portfolio/PortfolioFour";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import { useSearchParams } from 'react-router-dom';
import AppContext from "../../../components/context/AppContext";
import axios from "axios";
import { API } from "../../../data";


const getcategory = async (id) => {
  const response = await axios.get(`${API}/categories/${id}`)
  return response.data
}


const PortfolioV3 = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState(null)

  useEffect(() => {
    setLoading(true)
    getcategory(id).then(pay => {
      setCategory(pay)
      setLoading(false)
    });
  }, [])


  if (loading) {
    return " Loading . . ."
  }

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          Portfolio Grid 3 Column || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-six">
        <div className="container">
          <h1 className="heading">{category?.name}</h1>
          <p className="sub-heading">
            {category?.desc}
          </p>
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/*  =============================================
            Fancy Portfolio Two
        ==============================================  */}
      <div className="fancy-portfolio-four lg-container">
        <div className="container">
          <div className="top-border bottom-border pb-130 md-pb-90">
            {category?.products.length ? <PortfolioFour products={category?.products} /> : <p className="text-center font-weight-bold p-4 text-white fs-4 bg-dark" style={{ transition: 'all 0.5s ease', borderRadius: "3vh" }}>No products found</p>}

            <div className="text-center mt-90 md-mt-50">
              <h2 className="contact-title font-gordita">
                Do you have any projects? <br />
                Contact us.
              </h2>
              <a href="#" className="theme-btn-nine mt-35">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-two */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">


          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default PortfolioV3;
