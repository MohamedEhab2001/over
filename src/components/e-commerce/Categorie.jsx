import React, { useContext } from "react";
import kid from '../../assets/over/kid.avif';
import woman from '../../assets/over/woman.avif'
import man from '../../assets/over/man.jpg'
import others from '../../assets/over/others.jpg'
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
const Categorie = () => {
  const categorieContent = [
    {
      id: 1,
      bgImage: `url(${kid})`,
      title: "Kids",
      delayAnimation: "0",
    },
    {
      id: 2,
      bgImage: `url(${woman})`,
      title: "Woman",
      delayAnimation: "100",
    },
    {
      id: 3,
      bgImage: `url(${man})`,
      title: "Man",
      delayAnimation: "200",
    },
    {
      id: 4,
      bgImage: `url(${others})`,
      title: "Others",
      delayAnimation: "300",
    },
  ];
  const { newCategories } = useContext(AppContext)
  console.log(newCategories)
  return (
    <>

      <div className="d-flex flex-row justify-content-center align-items-center cats">
        {newCategories?.map((item) => (
          <div
            className="col-lg-3 col-sm-6 "
            data-aos="fade-up"
            data-aos-delay="100"
            key={item.id}
          >
            <div
              className="SC_block_one d-flex flex-column justify-content-center align-items-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h3 className="tran3s">{item.name}</h3>
              <Link to={`allProducts?id=${item.id}`} className="sp-now-btn tran3s">
                Shop Now
              </Link>
            </div>
            {/* <!-- /.SC_block_one --> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Categorie;
