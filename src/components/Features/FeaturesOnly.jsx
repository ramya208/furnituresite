import "./Features.css";
import lineImage from "../../assets/line.jpg";
import boxImage from "../../assets/box.jpg";
import verifyImage from "../../assets/verify.jpg";

function FeaturesOnly() {
  return (
    <section className="features">
      <div className="feature-container">

        <div className="feature-card">
          <img src={lineImage} alt="" className="Line" />
          <div className="content">
            <h3>SECURE PAYMENT</h3>
            <p>Aenean commodo ligula eget dolor. Etiam rhoncus….</p>
          </div>
        </div>

        <div className="feature-card">
          <img src={boxImage} alt="" className="Box" />
          <div className="content">
            <h3>BIG VARIETY</h3>
            <p>Aenean commodo ligula eget dolor. Etiam rhoncus….</p>
          </div>
        </div>

        <div className="feature-card">
          <img src={verifyImage} alt="" className="Verify" />
          <div className="content">
            <h3>CLASS BADGE</h3>
            <p>Aenean commodo ligula eget dolor. Etiam rhoncus….</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturesOnly;