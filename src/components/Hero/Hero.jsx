// import "./Hero.css";
// import offerImage from "../../assets/offer.png"
// import chairImage from "../../assets/chair.png";

// function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-container">

//         <div className="hero-left">
//              <img src={offerImage} alt="OfferImage" className="offer" />
          

//           <h1>ANTIQUE FURNITURE</h1>

//          <p>
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit
//   <br />
//   <span className="second-line">
//     libero. Aenean commodo ligula eget dolor.
//   </span>
// </p>

//           <button className="shop-btn">SHOP NOW</button>
//         </div>

        
//           <div className="hero-right">
//           <img src={chairImage} alt="Chair" className="chair" />
//         </div>


//       </div>
//     </section>
//   );
// }

// export default Hero;
import "./Hero.css";
import offerImage from "../../assets/offer.png";
import chairImage from "../../assets/chair.png";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">
          <img
            src={offerImage}
            alt="OfferImage"
            className="offer"
          />

          <h1>ANTIQUE FURNITURE</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            <br />
            <span className="second-line">
              libero. Aenean commodo ligula eget dolor.
            </span>
          </p>

          <button className="shop-btn" onClick={handleShopNow}>
            SHOP NOW
          </button>
        </div>

        <div className="hero-right">
          <img
            src={chairImage}
            alt="Chair"
            className="chair"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;