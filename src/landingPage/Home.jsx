import { Link, NavLink } from "react-router-dom";
import '../components/sass-folder/home.css'
// import landingPage from "../assets/landing.webp";
import landingPage from "../assets/landing.jpg";
import one from "../assets/products/goldLogos/1.svg";
import oneSec from "../assets/products/goldLogos/1.png";
import two from "../assets/products/goldLogos/2.svg";
import twoSec from "../assets/products/goldLogos/2.png";
import three from "../assets/products/goldLogos/3.svg";
import threeSec from "../assets/products/goldLogos/3.png";
import four from "../assets/products/goldLogos/4.svg";
import fourSec from "../assets/products/goldLogos/4.png";
import five from "../assets/products/goldLogos/5.svg";
import fiveSec from "../assets/products/goldLogos/5.png";
import six from "../assets/products/goldLogos/6.svg";
import sixSec from "../assets/products/goldLogos/6.png";
import Success from "./components/Success";
import banner from "../assets/fe.png";
const Home = () => {
  const products = [
    {
      main: one,
      sec: oneSec,
    },
    {
      main: two,
      sec: twoSec,
    },
    {
      main: three,
      sec: threeSec,
    },
    {
      main: four,
      sec: fourSec,
    },
    {
      main: five,
      sec: fiveSec,
    },
    {
      main: six,
      sec: sixSec,
    },
  ];
  return (
    <>
      <div className="main">
 <img src={banner} alt="" />
 <NavLink to="/login">هيا نبدأ</NavLink>
      </div>
      {/* productss ************************************************ */}

      <div className="subMain py-4">
        <div>
          <div className="mainHeading">
            <h1>المنتجات</h1>
          </div>
          <div className="mx-auto container">
            <p className=" text-xl text-lightGray text-center px-12">
              احصل على الوصول إلى الأدوات التي يمكن أن تساعدك على تقليل الديون ،
              وإصلاح وبناء الائتمان الخاص بك ، وإدارة ميزانياتك ، وتوفير المال ،
              وتحسين عاداتك المالية ، واحترف الاسواق المالية.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-2 my-12">
              {products.map((product, index) => (
                <div
                  key={index}
                  className=" col-span-1 w-full group flex relative justify-center items-center rounded-2xl bg-lightGold aspect-square"
                >
                  <img
                    src={product.main}
                    className="max-w-[75%] max-h-[75%]"
                    alt=""
                  />
                  <img
                    src={product.sec}
                    className="w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Success />
    </>
  );
};

export default Home;
