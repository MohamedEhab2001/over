import React from "react";
import { Link } from "react-router-dom";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  // {
  //   icon: "fa-twitter",
  //   link: "https://twitter.com/",
  // },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/over_2_0?igsh=YjIxM3dmMzhqcWEx",
  },
];

const CopyRightThree = () => {
  return (
    <div className="row">
      <div className="col-lg-4 order-lg-1 mb-20">
        <ul
          className="
              d-flex
              justify-content-center justify-content-lg-start
              footer-nav
            "
        >
          <li>
            <span style={{ marginRight: "10px" }} to="#">
              Over Brand
            </span>
          </li>
          <li>
            <a href="https://wa.me/201212187973" target="_href">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 order-lg-3 mb-20">
        <ul
          className=" d-flex
              justify-content-center justify-content-lg-end
              social-icon"
        >
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
      <div className="col-lg-4 order-lg-2 mb-20">
        <p className="copyright text-center">
          Developed By @{new Date().getFullYear()}{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61564413371192"
            target="_blank"
            rel="noopener noreferrer"
          >
            VistaWeb
          </a>{" "}
          mo.
        </p>
      </div>
    </div>
  );
};

export default CopyRightThree;
