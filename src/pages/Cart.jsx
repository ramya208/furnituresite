// import React from "react";

// import {
//   useSelector,
//   useDispatch
// } from "react-redux";

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart
// } from "../redux/cartSlice";

// function Cart() {

//   const cartItems = useSelector(
//     state => state.cart.items
//   );

//   const dispatch = useDispatch();

//   const total = cartItems.reduce(
//     (sum, item) =>
//       sum + item.price * item.quantity,
//     0
//   );

//   return (

//     <div className="cart-page">

//       <h1>MY CART</h1>

//       {cartItems.length === 0 ? (

//         <h2>Your cart is empty</h2>

//       ) : (

//         <>

//           {cartItems.map(item => (

//             <div
//               className="cart-item"
//               key={item.id}
//             >

//               <img
//                 src={item.image}
//                 alt={item.name}
//               />

//               <div>

//                 <h2>{item.name}</h2>

//                 <p>
//                   ${item.price}.00
//                 </p>

//                 <div>

//                   <button
//                     onClick={() =>
//                       dispatch(
//                         decreaseQuantity(item.id)
//                       )
//                     }
//                   >
//                     -
//                   </button>

//                   <span>
//                     {item.quantity}
//                   </span>

//                   <button
//                     onClick={() =>
//                       dispatch(
//                         increaseQuantity(item.id)
//                       )
//                     }
//                   >
//                     +
//                   </button>

//                 </div>

//                 <button
//                   onClick={() =>
//                     dispatch(
//                       removeFromCart(item.id)
//                     )
//                   }
//                 >
//                   REMOVE
//                 </button>

//               </div>

//             </div>

//           ))}

//           <h2>
//             Total: ${total}.00
//           </h2>

//         </>

//       )}

//     </div>
//   );
// }

// export default Cart;

// import { useSelector } from "react-redux";

// function Cart() {
//   const cartItems = useSelector(state => state.cart.items);

//   console.log("Cart Items:", cartItems);

//   return (
//     <div>
//       <h1>MY CART</h1>
//       <h2>Cart Page Working</h2>

//       <h3>Items: {cartItems.length}</h3>
//     </div>
//   );
// }

// export default Cart;
// 
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { addToCart } from "../redux/cartSlice";

// import "./Cart.css";

// function Cart() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const product = location.state;

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <div className="empty-cart">
//         <h2>Product Not Found</h2>
//       </div>
//     );
//   }

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         ...product,
//         quantity: quantity,
//       })
//     );
//   };

//   return (
//     <div className="cart-product-page">

//       {/* LEFT IMAGE */}

//       <div className="cart-product-image">
//         <img
//           src={product.image}
//           alt={product.title}
//         />
//       </div>


//       {/* RIGHT CONTENT */}

//       <div className="cart-product-info">

//         <h1>{product.title}</h1>

//         <h3>{product.price}</h3>

//         <p className="cart-description">
//           {product.description}
//         </p>


//         {/* QUANTITY */}

//         <div className="cart-quantity">

//           <button onClick={decreaseQuantity}>
//             -
//           </button>

//           <span>{quantity}</span>

//           <button onClick={increaseQuantity}>
//             +
//           </button>

//           <button
//             className="cart-add-button"
//             onClick={handleAddToCart}
//           >
//             ADD TO CART
//           </button>

//         </div>


//         {/* SKU */}

//         <p className="cart-meta">
//           SKU: <span>{product.sku}</span>
//         </p>


//         {/* CATEGORIES */}

//         <p className="cart-meta">
//           CATEGORIES:{" "}
//           <span>{product.categories}</span>
//         </p>


//         {/* TABS */}

//         <div className="cart-tabs">

//           <div>DESCRIPTION</div>

//           <div>ADDITIONAL INFORMATION</div>

//           <div>REVIEWS (0)</div>

//         </div>

//       </div>

//     </div>
    
//   );
// }

// export default Cart;
// import React, { useState } from "react";

// import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { addToCart } from "../redux/cartSlice";

// import "./Cart.css";
// import product1 from "../assets/productone.jpg";
// import product2 from "../assets/producttwo.jpg";
// import product3 from "../assets/productthree.jpg";
// import product4 from "../assets/productfour.jpg";
// function Cart() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const product = location.state;

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <div className="empty-cart">
//         <h2>Product Not Found</h2>
//       </div>
//     );
//   }

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         ...product,
//         quantity: quantity,
//       })
//     );
//   };

//   return (
//     <>
//       {/* PRODUCT DETAILS */}
//       <div className="cart-product-page">

//         {/* LEFT IMAGE */}
//         <div className="cart-product-image">
//           <img
//             src={product.image}
//             alt={product.title}
//           />
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="cart-product-info">

//           <h1>{product.title}</h1>

//           <h3>{product.price}</h3>

//           <p className="cart-description">
//             {product.description}
//           </p>

//           {/* QUANTITY */}
//           <div className="cart-quantity">

//             <button onClick={decreaseQuantity}>
//               -
//             </button>

//             <span>{quantity}</span>

//             <button onClick={increaseQuantity}>
//               +
//             </button>

//             <button
//               className="cart-add-button"
//               onClick={handleAddToCart}
//             >
//               ADD TO CART
//             </button>

//           </div>

//           {/* SKU */}
//           <p className="cart-meta">
//             SKU: <span>{product.sku}</span>
//           </p>

//           {/* CATEGORIES */}
//           <p className="cart-meta">
//             CATEGORIES:{" "}
//             <span>{product.categories}</span>
//           </p>

//           {/* TABS */}
//           <div className="cart-tabs">
//             <div>DESCRIPTION</div>
//             <div>ADDITIONAL INFORMATION</div>
//             <div>REVIEWS (0)</div>
//           </div>

//         </div>
//       </div>

//       {/* RELATED PRODUCTS */}
//       <section className="related-products">

//         <h2>Related Products</h2>

//         <div className="related-products-grid">

//           <div className="related-product-card">
//             <img src={product1} alt={productone} />
//             <h3>{product.title}</h3>
//             <p>{product.price}</p>
//           </div>

//           <div className="related-product-card">
//             <img src={producttwo} alt="producttwo" />
//             <h3>{product.title}</h3>
//             <p>{product.price}</p>
//           </div>

//           <div className="related-product-card">
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>{product.price}</p>
//           </div>

//           <div className="related-product-card">
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>{product.price}</p>
//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Cart;
// import React, { useState } from "react";

// import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { addToCart } from "../redux/cartSlice";

// import "./Cart.css";

// import product1 from "../assets/productone.jpg";
// import product2 from "../assets/producttwo.jpg";
// import product3 from "../assets/productthree.jpg";
// import product4 from "../assets/productfour.jpg";
// const [showDescription, setShowDescription] = useState(false);
// const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

// function Cart() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const product = location.state;

//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return (
//       <div className="empty-cart">
//         <h2>Product Not Found</h2>
//       </div>
//     );
//   }

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         ...product,
//         quantity: quantity,
//       })
//     );
//   };

//   return (
//     <>
//       {/* PRODUCT DETAILS */}

//       <div className="cart-product-page">

//         {/* LEFT IMAGE */}

//         <div className="cart-product-image">
//           <img
//             src={product.image}
//             alt={product.title}
//           />
//         </div>

//         {/* RIGHT CONTENT */}

//         <div className="cart-product-info">

//           <h1>{product.title}</h1>

//           <h3>{product.price}</h3>

//           <p className="cart-description">
//             {product.description}
//           </p>

//           {/* QUANTITY */}

//           <div className="cart-quantity">

//             <button onClick={decreaseQuantity}>
//               -
//             </button>

//             <span>{quantity}</span>

//             <button onClick={increaseQuantity}>
//               +
//             </button>

//             <button
//               className="cart-add-button"
//               onClick={handleAddToCart}
//             >
//               ADD TO CART
//             </button>

//           </div>

//           {/* SKU */}

//           <p className="cart-meta">
//             SKU: <span>{product.sku}</span>
//           </p>

//           {/* CATEGORIES */}

//           <p className="cart-meta">
//             CATEGORIES:{" "}
//             <span>{product.categories}</span>
//           </p>

//           {/* TABS */}

//           <div className="cart-tabs">
//             <div>DESCRIPTION</div>
//             <div>ADDITIONAL INFORMATION</div>
//             <div>REVIEWS (0)</div>
//           </div>

//         </div>
//       </div>


//       {/* RELATED PRODUCTS */}

//       <section className="related-products">

//         <h2>Related Products</h2>

//         <div className="related-products-grid">

//           {/* PRODUCT 1 */}

//           <div className="related-product-card">
//             <img
//               src={product1}
//               alt="Product One"
//             />
//             <h3>Product One</h3>
//             <p>₹500</p>
//           </div>


//           {/* PRODUCT 2 */}

//           <div className="related-product-card">
//             <img
//               src={product2}
//               alt="Product Two"
//             />
//             <h3>Product Two</h3>
//             <p>₹600</p>
//           </div>


//           {/* PRODUCT 3 */}

//           <div className="related-product-card">
//             <img
//               src={product3}
//               alt="Product Three"
//             />
//             <h3>Product Three</h3>
//             <p>₹700</p>
//           </div>


//           {/* PRODUCT 4 */}

//           <div className="related-product-card">
//             <img
//               src={product4}
//               alt="Product Four"
//             />
//             <h3>Product Four</h3>
//             <p>₹800</p>
//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Cart;
// import React, { useState } from "react";

// import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { addToCart } from "../redux/cartSlice";

// import "./Cart.css";

// import product1 from "../assets/productone.jpg";
// import product2 from "../assets/producttwo.jpg";
// import product3 from "../assets/productthree.jpg";
// import product4 from "../assets/productfour.jpg";
// import CartDrawer from "../components/CartDrawer/CartDrawer";

// function Cart() {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const product = location.state;

//   const [quantity, setQuantity] = useState(1);

//   // Tabs
//   const [activeTab, setActiveTab] = useState("");
//   const [cartOpen, setCartOpen] = useState(false);

//   if (!product) {
//     return (
//       <div className="empty-cart">
//         <h2>Product Not Found</h2>
//       </div>
//     );
//   }

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         ...product,
//         quantity: quantity,
//       })
      
//     );
//      setCartOpen(true);
//   };

//   const handleTabClick = (tab) => {
//     if (activeTab === tab) {
//       setActiveTab("");
//     } else {
//       setActiveTab(tab);
//     }
//   };

//   return (
//     <>
//       {/* PRODUCT DETAILS */}

//       <div className="cart-product-page">

//         {/* LEFT IMAGE */}

//         <div className="cart-product-image">
//           <img
//             src={product.image}
//             alt={product.title}
//           />
//         </div>

//         {/* RIGHT CONTENT */}

//         <div className="cart-product-info">

//           <h1>{product.title}</h1>

//           <h3>{product.price}</h3>

//           <p className="cart-description">
//             {product.description}
//           </p>

//           {/* QUANTITY */}

//           <div className="cart-quantity">

//             <button onClick={decreaseQuantity}>
//               -
//             </button>

//             <span>{quantity}</span>

//             <button onClick={increaseQuantity}>
//               +
//             </button>

//             <button
//               className="cart-add-button"
//               onClick={handleAddToCart}
//             >
//               ADD TO CART
//             </button>

//           </div>

//           {/* SKU */}

//           <p className="cart-meta">
//             SKU: <span>{product.sku}</span>
//           </p>

//           {/* CATEGORIES */}

//           <p className="cart-meta">
//             CATEGORIES:{" "}
//             <span>{product.categories}</span>
//           </p>

//           {/* TABS */}

//           <div className="cart-tabs">

//             <button
//               onClick={() => handleTabClick("description")}
//             >
//               DESCRIPTION
//             </button>

//             <button
//               onClick={() =>
//                 handleTabClick("additional")
//               }
//             >
//               ADDITIONAL INFORMATION
//             </button>

//             <button
//               onClick={() => handleTabClick("reviews")}
//             >
//               REVIEWS (0)
//             </button>

//           </div>

//           {/* DESCRIPTION DATA */}

//           {activeTab === "description" && (
//             <div className="tab-content">

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur
//                 adipiscing elit. Sed do eiusmod tempor
//                 incididunt ut labore et dolore magna aliqua.
//                 Ut enim ad minim veniam, quis nostrud
//                 exercitation ullamco laboris nisi ut aliquip
//                 ex ea commodo consequat.
//               </p>

//             </div>
//           )}

//           {/* ADDITIONAL INFORMATION DATA */}

//           {activeTab === "additional" && (
//             <div className="tab-content">

//               <table className="additional-info-table">

//                 <tbody>

//                   <tr>
//                     <th>Weight</th>
//                     <td>3 kg</td>
//                   </tr>

//                   <tr>
//                     <th>Dimensions</th>
//                     <td>60 × 30 × 60 m</td>
//                   </tr>

//                 </tbody>

//               </table>

//             </div>
//           )}

//           {/* REVIEWS DATA */}

//           {activeTab === "reviews" && (
//             <div className="tab-content review-content">

//     <h3>Reviews</h3>

//     <p>There are no reviews yet.</p>

//     <p>
//       Be the first to review "{product.title}"
//     </p>

//     <p>
//       Your email address will not be published.
//       Required fields are marked *
//     </p>

//     {/* RATING */}

//     <div className="review-rating">
//       <label>Your rating *</label>

//       <div className="rating-options">
//         <label>
//           <input type="radio" name="rating" value="1" />
//           1
//         </label>

//         <label>
//           <input type="radio" name="rating" value="2" />
//           2
//         </label>

//         <label>
//           <input type="radio" name="rating" value="3" />
//           3
//         </label>

//         <label>
//           <input type="radio" name="rating" value="4" />
//           4
//         </label>

//         <label>
//           <input type="radio" name="rating" value="5" />
//           5
//         </label>
//       </div>
//     </div>

//     {/* REVIEW */}

//     <div className="review-field">
//       <label>Your review *</label>

//       <textarea
//         placeholder="Write your review"
//         rows="5"
//       ></textarea>
//     </div>

//     {/* NAME */}

//     <div className="review-field">
//       <label>Name *</label>

//       <input
//         type="text"
//         placeholder="Enter your name"
//       />
//     </div>

//     {/* EMAIL */}

//     <div className="review-field">
//       <label>Email *</label>

//       <input
//         type="email"
//         placeholder="Enter your email"
//       />
//     </div>

//     {/* SAVE */}

//     <div className="review-save">
//       <label>
//         <input type="checkbox" />

//         Save my name, email, and website in this browser
//         for the next time I comment.
//       </label>
//     </div>

//     {/* SUBMIT */}

//     <button
//       type="button"
//       className="submit-review-btn"
//     >
//       SUBMIT
//     </button>

//   </div>
//           )}

//         </div>
//       </div>


//       {/* RELATED PRODUCTS */}

//       <section className="related-products">

//         <h2>Related Products</h2>

//         <div className="related-products-grid">

//           {/* PRODUCT 1 */}

//           <div className="related-product-card">

//             <img
//               src={product1}
//               alt="Product One"
//             />

//             <h3>Product One</h3>

//             <p>₹500</p>

//           </div>


//           {/* PRODUCT 2 */}

//           <div className="related-product-card">

//             <img
//               src={product2}
//               alt="Product Two"
//             />

//             <h3>Product Two</h3>

//             <p>₹600</p>

//           </div>


//           {/* PRODUCT 3 */}

//           <div className="related-product-card">

//             <img
//               src={product3}
//               alt="Product Three"
//             />

//             <h3>Product Three</h3>

//             <p>₹700</p>

//           </div>


//           {/* PRODUCT 4 */}

//           <div className="related-product-card">

//             <img
//               src={product4}
//               alt="Product Four"
//             />

//             <h3>Product Four</h3>

//             <p>₹800</p>

//           </div>

//         </div>

//       </section>

//       <CartDrawer
//         isOpen={cartOpen}
//         onClose={() => setCartOpen(false)}
//       />

//     </>
//   );
// }

// export default Cart;
import React, { useState } from "react";

// import { useLocation } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";

import "./Cart.css";

import product1 from "../assets/productone.jpg";
import product2 from "../assets/producttwo.jpg";
import product3 from "../assets/productthree.jpg";
import product4 from "../assets/productfour.jpg";

import CartDrawer from "../components/CartDrawer/CartDrawer";



function Cart() {
  const location = useLocation();
  const dispatch = useDispatch();

  const product = location.state;

  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("");

  const [cartOpen, setCartOpen] = useState(false);


  if (!product) {
    return (
      <div className="empty-cart">
        <h2>Product Not Found</h2>
      </div>
    );
  }


  // =========================
  // QUANTITY
  // =========================

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {

    // Product price convert
    // ₹500 / $500 / 500 -> 500

    const numericPrice = Number(
      String(product.price)
        .replace(/[₹,$]/g, "")
        .trim()
    );


    console.log("Original Product:", product);

    console.log(
      "Original Price:",
      product.price
    );

    console.log(
      "Numeric Price:",
      numericPrice
    );


    dispatch(
      addToCart({
        ...product,

        // IMPORTANT
        price: numericPrice,

        quantity: quantity,
      })
    );


    // Open drawer
    setCartOpen(true);
  };


  // =========================
  // TABS
  // =========================

  const handleTabClick = (tab) => {

    if (activeTab === tab) {
      setActiveTab("");
    } else {
      setActiveTab(tab);
    }

  };


  return (
    <>


      {/* =========================
          PRODUCT DETAILS
      ========================= */}

      <div className="cart-product-page">


        {/* LEFT IMAGE */}

        <div className="cart-product-image">

          <img
            src={product.image}
            alt={product.title}
          />

        </div>


        {/* RIGHT CONTENT */}

        <div className="cart-product-info">


          <h1>
            {product.title}
          </h1>


          {/* PRODUCT PRICE */}

          <h3>
            ₹
            {Number(
              String(product.price)
                .replace(/[₹,$]/g, "")
                .trim()
            ).toFixed(2)}
          </h3>


          <p className="cart-description">
            {product.description}
          </p>


          {/* =========================
              QUANTITY
          ========================= */}

          <div className="cart-quantity">

            <button
              onClick={decreaseQuantity}
            >
              -
            </button>


            <span>
              {quantity}
            </span>


            <button
              onClick={increaseQuantity}
            >
              +
            </button>


            <button
              className="cart-add-button"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>

          </div>


          {/* SKU */}

          <p className="cart-meta">

            SKU:

            <span>
              {product.sku}
            </span>

          </p>


          {/* CATEGORIES */}

          <p className="cart-meta">

            CATEGORIES:

            <span>
              {product.categories}
            </span>

          </p>


          {/* =========================
              TABS
          ========================= */}

          <div className="cart-tabs">


            <button
              onClick={() =>
                handleTabClick("description")
              }
            >
              DESCRIPTION
            </button>


            <button
              onClick={() =>
                handleTabClick("additional")
              }
            >
              ADDITIONAL INFORMATION
            </button>


            <button
              onClick={() =>
                handleTabClick("reviews")
              }
            >
              REVIEWS (0)
            </button>

          </div>


          {/* =========================
              DESCRIPTION
          ========================= */}

          {activeTab === "description" && (

            <div className="tab-content">

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis
                nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>

            </div>

          )}


          {/* =========================
              ADDITIONAL INFORMATION
          ========================= */}

          {activeTab === "additional" && (

            <div className="tab-content">

              <table className="additional-info-table">

                <tbody>

                  <tr>

                    <th>
                      Weight
                    </th>

                    <td>
                      3 kg
                    </td>

                  </tr>


                  <tr>

                    <th>
                      Dimensions
                    </th>

                    <td>
                      60 × 30 × 60 m
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          )}


          {/* =========================
              REVIEWS
          ========================= */}

          {activeTab === "reviews" && (

            <div className="tab-content review-content">


              <h3>
                Reviews
              </h3>


              <p>
                There are no reviews yet.
              </p>


              <p>
                Be the first to review
                "{product.title}"
              </p>


              <p>
                Your email address will not
                be published. Required fields
                are marked *
              </p>


              {/* RATING */}

              <div className="review-rating">

                <label>
                  Your rating *
                </label>


                <div className="rating-options">

                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value="1"
                    />
                    1
                  </label>


                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value="2"
                    />
                    2
                  </label>


                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value="3"
                    />
                    3
                  </label>


                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value="4"
                    />
                    4
                  </label>


                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value="5"
                    />
                    5
                  </label>

                </div>

              </div>


              {/* REVIEW */}

              <div className="review-field">

                <label>
                  Your review *
                </label>

                <textarea
                  placeholder="Write your review"
                  rows="5"
                ></textarea>

              </div>


              {/* NAME */}

              <div className="review-field">

                <label>
                  Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              {/* EMAIL */}

              <div className="review-field">

                <label>
                  Email *
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>


              {/* SAVE */}

              <div className="review-save">

                <label>

                  <input
                    type="checkbox"
                  />

                  Save my name, email, and website
                  in this browser for the next time
                  I comment.

                </label>

              </div>


              {/* SUBMIT */}

              <button
                type="button"
                className="submit-review-btn"
              >
                SUBMIT
              </button>


            </div>

          )}

        </div>

      </div>


      {/* =========================
          RELATED PRODUCTS
      ========================= */}

      <section className="related-products">

        <h2>
          Related Products
        </h2>


        <div className="related-products-grid">


          {/* PRODUCT 1 */}

          <div className="related-product-card">

            <img
              src={product1}
              alt="Product One"
            />

            <h3>
              Product One
            </h3>

            <p>
              ₹500
            </p>

          </div>


          {/* PRODUCT 2 */}

          <div className="related-product-card">

            <img
              src={product2}
              alt="Product Two"
            />

            <h3>
              Product Two
            </h3>

            <p>
              ₹600
            </p>

          </div>


          {/* PRODUCT 3 */}

          <div className="related-product-card">

            <img
              src={product3}
              alt="Product Three"
            />

            <h3>
              Product Three
            </h3>

            <p>
              ₹700
            </p>

          </div>


          {/* PRODUCT 4 */}

          <div className="related-product-card">

            <img
              src={product4}
              alt="Product Four"
            />

            <h3>
              Product Four
            </h3>

            <p>
              ₹800
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CART DRAWER
      ========================= */}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() =>
          setCartOpen(false)
        }
      />

    </>
  );
}


export default Cart;