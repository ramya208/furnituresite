// import "./Navbar.css";
// // import heroImage from "../../assets/slider-img-1.jpg"
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
// 
// import "./Navbar.css";
// import logo from "../../assets/logo.png";
// import { useState } from "react";
// import CartDrawer from "../CartDrawer/CartDrawer";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [cartOpen, setCartOpen] = useState(false);

//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   return (
//     <>
//       <nav className="navbar">

//         <div className="logo">
//           <img
//             src={logo}
//             alt="Design"
//             className="logo"
//           />
//         </div>

//         <ul className="nav-links">
//           <li><a href="/">HOME</a></li>
//           <li><a href="/about">ABOUT</a></li>
//           <li><a href="/faq">FAQ</a></li>
//           <li><a href="/products">PRODUCTS</a></li>
//           <li><a href="/contact">CONTACT</a></li>
//         </ul>

//         <div className="nav-icons">

//           {/* CART ICON */}
//           <button
//             className="cart-icon-btn"
//             onClick={() => setCartOpen(true)}
//           >
//             <i className="ri-shopping-cart-line"></i>

//             {/* {cartItems.length > 0 && (
//               <span className="cart-count">
//                 {cartItems.length}
//               </span> */}
//                <span className="cart-count">
//     {cartItems.length}
//   </span>
//             {/* )} */}
//           </button>
//           <button
//     className="profile-icon-btn"
//     onClick={() => navigate("/login")}
//   >
//     {/* <i className="ri-user-line"></i> */}
//     <Link to="/auth">
//     <i className="ri-user-line"></i>
//   </Link>
//   <Link to="/wishlist" className="wishlist-icon">

//   <i className="ri-heart-line"></i>

//   {wishlistCount > 0 && (
//     <span className="wishlist-count">
//       {wishlistCount}
//     </span>
//   )}

// </Link>
//   </button>

//           {/* SEARCH */}
//           {/* <i className="ri-search-line"></i> */}

//         </div>

//       </nav>

//       {/* CART DRAWER */}
//       <CartDrawer
//         isOpen={cartOpen}
//         onClose={() => setCartOpen(false)}
//       />

//     </>
//   );
// }

// export default Navbar;
import "./Navbar.css";

import logo from "../../assets/logo.png";

import { useState } from "react";

import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import CartDrawer from "../CartDrawer/CartDrawer";


function Navbar() {

  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();


  // Cart items

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );


  // Wishlist count

  const wishlistCount = useSelector(
    (state) => state.wishlist?.items?.length || 0
  );


  return (
    <>
      <nav className="navbar">


        {/* LOGO */}

        <div className="logo">

          <Link to="/home">

            <img
              src={logo}
              alt="Design"
              className="logo"
            />

          </Link>

        </div>


        {/* MENU */}

        <ul className="nav-links">

          <li>
            <Link to="/home">
              HOME
            </Link>
          </li>

          <li>
            <Link to="/about">
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="/faq">
              FAQ
            </Link>
          </li>

          <li>
            <Link to="/products">
              PRODUCTS
            </Link>
          </li>

          <li>
            <Link to="/contact">
              CONTACT
            </Link>
          </li>

        </ul>


        {/* ICONS */}

        <div className="nav-icons">


          {/* CART */}

          <button
            type="button"
            className="cart-icon-btn"
            onClick={() => setCartOpen(true)}
          >

            <i className="ri-shopping-cart-line"></i>


            <span className="cart-count">
              {cartItems.length}
            </span>

          </button>



          {/* PROFILE */}

          <button
            type="button"
            className="profile-icon-btn"
            onClick={() => navigate("/signup")}
          >

            <i className="ri-user-line"></i>

          </button>



          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="wishlist-icon"
          >

            <i className="ri-heart-line"></i>


            {wishlistCount > 0 && (
              <span className="wishlist-count">
                {wishlistCount}
              </span>
            )}

          </Link>


        </div>

      </nav>


      {/* CART DRAWER */}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </>
  );
}


export default Navbar;