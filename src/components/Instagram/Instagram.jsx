import "./Instagram.css";
import design from "../../assets/design.png"

function Instagram() {
  return (
    <section className="instagram">

      <div className="top-line"></div>

      <div className="instagram-title">

        <div className="design">
           <img src={design} alt="Design" className="design" />
        </div>

        <h2>FOLLOW US ON INSTAGRAM</h2>

      </div>

      <div className="bottom-line"></div>

    </section>
  );
}

export default Instagram;