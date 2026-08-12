import "./About.css";

import img1 from "../assets/about-img-1.jpg";
import img2 from "../assets/about-img-2.jpg";
import FeaturesOnly from "../components/Features/FeaturesOnly";
import Instagram from "../components/Instagram/Instagram";


function About() {
  return (
    <div className="about">

      <div className="top">
        <h1>ABOUT STORE</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean commodo ligula eget dolor. . Etiam rhoncus…. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
        </p>
      </div>

      {/* Row 1 */}
      <div className="timeline">

        <div className="boxone">
          <img src={img1} alt="" />
        </div>

        <div className="line">
          <span></span>
        </div>

        <div className="box text">
          <h2>REPURCHASE</h2>

          <p>
          Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...
          </p>
        </div>

      </div>

      {/* Row 2 */}
      <div className="timeline">

        <div className="box-text">
          <h2>RESTORATION</h2>

          <p>
                      

   Aenean commodo ligula eget dolor.
   Lorem ipsum dolor sit amet,
   consectetur adipiscing elit.
   Aenean commodo ligula eget
   dolor. Aenean massa...
          </p>
        </div>

        <div className="line">
          <span></span>
        </div>

        <div className="boxtwo">
          <img src={img2} alt="" />
        </div>

      </div>
      <div className="timeline">

  <div className="boxone">
    <img src={img1} alt="" />
  </div>

  <div className="line">
    <span></span>
  </div>

  <div className="boxtext">
    <h2>SELLING</h2>

    <p>
      Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet,
      consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa...
    </p>
  </div>

</div>


<FeaturesOnly />
<Instagram />

    </div>
    
    
    
  );
}

export default About;