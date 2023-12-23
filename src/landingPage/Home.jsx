import { Link, NavLink } from "react-router-dom";
import { useState ,useEffect } from "react";
import { route } from "../App";
import '../components/sass-folder/home.css'
import landingPage from "../assets/tnnbg.jpg";
// import landingPage from "../assets/landing.jpg";
import one from "../assets/WhatsApp Image 2023-12-23 at 00.32.03_f76b8344.jpg";
import two from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_371a13b7.jpg";
import three from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_ea8e6ac6.jpg";
import four from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_ea8e6ac6.jpg";
import five from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_ea8e6ac6.jpg";
import fives from "../assets/OCf9aqYsunt0ikTbmPEXtFRHc8.webp";
import triangle from "../assets/rmUdoCKrFcyVAEVCTrisCUuXci0.webp";
import imgBack from "../assets/ggrgr.png";
import Success from "./components/Success";
import banner from "../assets/fe.png";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = () => {
  const [leaders, setLeaders] = useState([]);
  const products = [
    {
      main: one,
     
    },
    {
      main: two,
    
    },
    {
      main: three,
     
    },
    {
      main: four,
  
    },
    {
      main: five,
    
    },
  
  ];

  
  useEffect(() => {
    axios
      .get(`${route}users/instractors`)
      .then((res) => setLeaders(res.data.data));
  }, []);
  return (
    <>
      <div className="main">
        <img src={landingPage} alt="" className="background" />
 <img src={banner} alt="" data-aos="fade-up"  data-aos-duration="3000" />
 <NavLink to="/login">هيا نبدأ</NavLink>
      </div>
      {/* productss ************************************************ */}

      
        <div className="product" id="prod">
          <div >
            <h1>المنتجات</h1>
          </div>
          <div className="container">
            <p className=" text-xl text-lightGray text-center px-12">
              احصل على الوصول إلى الأدوات التي يمكن أن تساعدك على تقليل الديون ،
              وإصلاح وبناء الائتمان الخاص بك ، وإدارة ميزانياتك ، وتوفير المال ،
              وتحسين عاداتك المالية ، واحترف الاسواق المالية.
            </p>
            <div className="prod-cont">
              <img src={fives} alt="" data-aos-duration={`2000`} data-aos="fade-left" className="shape-one" />
              <img src={triangle} alt="" data-aos-duration={`2000`} data-aos="fade-right" className="shape-two" />
              {products.map((product, index) => (
                <div
                  key={index}
                  className="prod-card"
                  data-aos="fade-up"
                  data-aos-duration={`2000`}
                >
                  <img
                    src={product.main}
                    alt=""
                  />
                  <div className="num">0{index+1}</div>
             
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="leaders" id="leads">
<h1>القادة</h1>
        <div className="leads">
        {leaders?.length ? (
          leaders.map((leader, index) => (
          <div className="leader" key={index}>
            <img src={imgBack} alt="" className="back" />
            <img src={leader.profileImg} alt="" className="profile" />
<div className="name">{leader.name}</div>
          </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
        </div>
        </div>
      
      {/* <Success /> */}
    </>
  );
};

export default Home;
