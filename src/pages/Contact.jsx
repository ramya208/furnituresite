// import "./Contact.css";
// import map from "../assets/map.png";

// function Contact() {
//   return (
//     <div className="contact-page">

//       {/* Banner Image */}
//       <div className="contact-banner">
//         <img src={map} alt="Map" />
//       </div>

//       {/* Contact Section */}
//       <div className="contact-container">

//         {/* Left Side */}
//         <div className="contact-left">
//           <h1>GET IN TOUCH!</h1>

//           <p>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit
//             libero eros faucibus. Aenean commodo ligula eget dolor.
//             Etiam rhoncus....
//           </p>

//           <div className="office-details">

//             <div className="office">
//               <h3>AMSTERDAM</h3>

//               <p>Zuiderkerkhof 42, 1011</p>
//               <p>Amsterdam, Netherlands</p>
//               <p>(00) + 123 4567 8900</p>
//               <p>bridge@example.com</p>
//             </div>

//             <div className="office">
//               <h3>COPENHAGEN</h3>

//               <p>Nørre Voldgade, 1358</p>
//               <p>København, Denmark</p>
//               <p>(00) + 123 4567 8900</p>
//               <p>bridge@example.com</p>
//             </div>

//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="contact-right">
//           <form>

//             <input
//               type="text"
//               placeholder="Your name....."
//             />

//             <input
//               type="email"
//               placeholder="Your email address....."
//             />

//             <textarea
//               rows="8"
//               placeholder="Write message here....."
//             ></textarea>

//             <button type="submit">
//               SUBMIT
//             </button>
            

//           </form>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import "./Contact.css";
import map from "../assets/map.png";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* Banner Image */}
      <div className="contact-banner">
        <img src={map} alt="Map" />
      </div>

      {/* Contact Section */}
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">
          <h1>GET IN TOUCH!</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            libero eros faucibus. Aenean commodo ligula eget dolor.
            Etiam rhoncus....
          </p>

          <div className="office-details">

            <div className="office">
              <h3>AMSTERDAM</h3>

              <p>Zuiderkerkhof 42, 1011</p>
              <p>Amsterdam, Netherlands</p>
              <p>(00) + 123 4567 8900</p>
              <p>bridge@example.com</p>
            </div>

            <div className="office">
              <h3>COPENHAGEN</h3>

              <p>Nørre Voldgade, 1358</p>
              <p>København, Denmark</p>
              <p>(00) + 123 4567 8900</p>
              <p>bridge@example.com</p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your name....."
              required
            />

            <input
              type="email"
              placeholder="Your email address....."
              required
            />

            <textarea
              rows="8"
              placeholder="Write message here....."
              required
            ></textarea>

            <button type="submit">
              SUBMIT
            </button>

            {submitted && (
              <p className="success-message">
                Message sent successfully!
              </p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;