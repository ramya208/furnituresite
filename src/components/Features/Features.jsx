import "./Features.css";
import lineImage from "../../assets/line.jpg"
import boxImage from "../../assets/box.jpg"
import verifyImage from "../../assets/verify.jpg"
import leftImage from "../../assets/leftimg.jpg"
import bookImage from "../../assets/book.jpg"
import coinImage from "../../assets/coin.jpg"
import newchairImage from "../../assets/newchair.jpg"


function Features() {
  return (
    <section className="features">
       <div className="feature-container">

      <div className="feature-card">
    
          <img src={lineImage} alt="LineImage" className="Line" />

        <div className="content">
          <h3>SECURE PAYMENT</h3>
          <p>Aenean commodo ligula eget dolor. Etiam rhoncus….</p>
        </div>
      </div>

      <div className="feature-card">
      
         <img src={boxImage} alt="BoxImage" className="Box" />

        <div className="content">
          <h3>BIG VARIETY</h3>
          <p>Aenean commodo ligula eget dolor. Etiam rhoncus….</p>
        </div>
      </div>

      <div className="feature-card">
      
        <img src={verifyImage} alt="VerifyImage" className="Verify" />

        <div className="content">
          <h3>CLASS BADGE</h3>
          <p>Aenean commodo ligula eget dolor. Etiam rhoncus….</p>
        </div>
      </div>
      </div>
       <div className="gallery">

    {/* <div className="left">
      <img src={leftImage} alt="LeftImage"  />
    </div> */}
    <div className="left">
  <img
    src={leftImage}
    alt="LeftImage"
    style={{
      width: "350px",
      height: "500px",
      objectFit: "cover",
      display: "block"
    }}
  />
</div>

    <div className="center">
      <img src={bookImage} alt="BookImage" className="Book" />
      <img src={coinImage} alt="CoinImage" className="Coin" />
    </div>

    {/* <div className="right">
      <img src={newchairImage} alt="NewchairImage" className="Newchair" />
    </div> */}
    <div className="right">
  <img
    src={newchairImage}
    alt="NewchairImage"
    style={{
      width: "350px",
      height: "500px",
      objectFit: "cover",
      display: "block"
    }}
  />
</div>

  </div>


    </section>
  );
}

export default Features;