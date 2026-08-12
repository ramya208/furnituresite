import "./Faq.css";
import faqImage from "../assets/image.png";
import design from "../assets/design.png";
function Faq() {
  return (
    <div className="faq">

      <div className="faq-banner">
        <img src={faqImage} alt="FAQ Banner" />
      </div>
        <div className="faq-content">
            <div className="centerimg">
        <img src={design} alt="design" />
      </div>
            


        <h1>FREQUENTLY ASKED QUESTIONS</h1>

        <div className="faq-container">

          {/* Left Column */}
          <div className="faq-column">

            <div className="faq-item">
              <h3>
                    <span className="icon">-</span>
                 SED FRINGILLA MAURIS SIT AMET NIBH</h3>
              <p>
                Aenean commodo ligula eget dolor. Etiam rhoncus. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque sed penatibus et magnis dis parturient montesEi facer postulant ocurreret vis, cu vidit nihil nec.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
 CURABITUR ULLAMCORPER ULTRICIES NISI</h3>
            </div>

            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
                 ETIAM ULTRICIES NISI VEL AUGUE</h3>
            </div>

            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
                NAM QUAM NUNC BLANDIT VEL</h3>
            </div>
            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
                AENEAN COMMODO LIGULA EGET DOLOR</h3>
            </div>


          </div>

          {/* Right Column */}
          <div className="faq-column">

            <div className="faq-item">
              <h3>
                    <span className="icon">-</span>
                SED FRINGILLA MAURIS SIT AMET NIBH</h3>
              <p>
                Aenean commodo ligula eget dolor. Etiam rhoncus. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque sed penatibus et magnis dis parturient montesEi facer postulant ocurreret vis, cu vidit nihil nec.
              </p>
            </div>

            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
                 CURABITUR ULLAMCORPER ULTRICIES NISI</h3>
            </div>

            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
                ETIAM ULTRICIES NISI VEL AUGUE</h3>
            </div>

            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
                 NAM QUAM NUNC BLANDIT VEL</h3>
            </div>
            <div className="faq-item">
              <h3>
                    <span className="icon">+</span>
                AENEAN COMMODO LIGULA EGET DOLOR</h3>
            </div>


          </div>

        </div>

      </div>


      {/* <h1>Frequently Asked Questions</h1> */}

    </div>
  );
}

export default Faq;