// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } from "../../redux/cartSlice";

// import "./CartDrawer.css";

// function CartDrawer({ isOpen, onClose }) {
//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const subtotal = cartItems.reduce(
//     (total, item) =>
//       total + Number(item.price) * item.quantity,
//     0
//   );

//   const handleViewCart = () => {
//     onClose();
//     navigate("/cart");
//   };

//   const handleCheckout = () => {
//     onClose();
//     navigate("/checkout");
//   };

//   return (
//     <>
//       {isOpen && (
//         <div
//           className="cart-overlay"
//           onClick={onClose}
//         ></div>
//       )}

//       <div
//         className={`cart-drawer ${
//           isOpen ? "cart-drawer-open" : ""
//         }`}
//       >

//         {/* HEADER */}

//         <div className="cart-drawer-header">

//           <h2>Shopping Cart</h2>

//           <button
//             className="cart-close"
//             onClick={onClose}
//           >
//             ×
//           </button>

//         </div>


//         {/* PRODUCTS */}

//         <div className="cart-drawer-items">

//           {cartItems.length === 0 ? (

//             <div className="empty-drawer">
//               <p>Your cart is empty</p>
//             </div>

//           ) : (

//             cartItems.map((item) => (

//               <div
//                 className="drawer-cart-item"
//                 key={item.id}
//               >

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                 />

//                 <div className="drawer-item-details">

//                   <h3>{item.title}</h3>

//                   <p>₹{item.price}</p>

//                   {/* QUANTITY */}

//                   <div className="drawer-quantity">

//                     <button
//                       onClick={() =>
//                         dispatch(
//                           decreaseQuantity(item.id)
//                         )
//                       }
//                     >
//                       −
//                     </button>

//                     <span>{item.quantity}</span>

//                     <button
//                       onClick={() =>
//                         dispatch(
//                           increaseQuantity(item.id)
//                         )
//                       }
//                     >
//                       +
//                     </button>

//                   </div>

//                   {/* REMOVE */}

//                   <button
//                     className="drawer-remove"
//                     onClick={() =>
//                       dispatch(
//                         removeFromCart(item.id)
//                       )
//                     }
//                   >
//                     Remove
//                   </button>

//                 </div>

//               </div>

//             ))

//           )}

//         </div>


//         {/* FOOTER */}

//         {cartItems.length > 0 && (

//           <div className="cart-drawer-footer">

//     <div className="drawer-price-row">
//       <span>Total:</span>
//       <strong>
//         ₹{subtotal.toFixed(2)}
//       </strong>
//     </div>


//             <div className="drawer-subtotal">

//               <span>Subtotal:</span>

//               <strong>
//                 ₹{subtotal.toFixed(2)}
//               </strong>

//             </div>

//             <button
//               className="view-cart-btn"
//               onClick={handleViewCart}
//             >
//               VIEW CART
//             </button>

//             <button
//               className="checkout-btn"
//               onClick={handleCheckout}
//             >
//               CHECKOUT
//             </button>

//           </div>

//         )}

//       </div>
//     </>
//   );
// }

// export default CartDrawer;
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } from "../../redux/cartSlice";

// import "./CartDrawer.css";

// function CartDrawer({ isOpen, onClose }) {
//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // SUBTOTAL
//   const subtotal = cartItems.reduce(
//     (total, item) => {
//       return (
//         total +
//         Number(item.price) * Number(item.quantity)
//       );
//     },
//     0
//   );

//   // TOTAL
//   // இப்போதைக்கு shipping/tax இல்லாததால்
//   // Total = Subtotal
//   const total = subtotal;

//   const handleViewCart = () => {
//     onClose();
//     navigate("/cart");
//   };

//   const handleCheckout = () => {
//     onClose();
//     navigate("/checkout");
//   };

//   return (
//     <>
//       {/* OVERLAY */}

//       {isOpen && (
//         <div
//           className="cart-overlay"
//           onClick={onClose}
//         ></div>
//       )}

//       {/* DRAWER */}

//       <div
//         className={`cart-drawer ${
//           isOpen ? "cart-drawer-open" : ""
//         }`}
//       >

//         {/* HEADER */}

//         <div className="cart-drawer-header">

//           <h2>Shopping Cart</h2>

//           <button
//             className="cart-close"
//             onClick={onClose}
//           >
//             ×
//           </button>

//         </div>


//         {/* PRODUCTS */}

//         <div className="cart-drawer-items">

//           {cartItems.length === 0 ? (

//             <div className="empty-drawer">
//               <p>Your cart is empty</p>
//             </div>

//           ) : (

//             cartItems.map((item) => (

//               <div
//                 className="drawer-cart-item"
//                 key={item.id}
//               >

//                 {/* IMAGE */}

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                 />


//                 {/* DETAILS */}

//                 <div className="drawer-item-details">

//                   <h3>{item.title}</h3>

//                   <p>
//                     ₹{Number(item.price).toFixed(2)}
//                   </p>


//                   {/* QUANTITY */}

//                   <div className="drawer-quantity">

//                     <button
//                       onClick={() =>
//                         dispatch(
//                           decreaseQuantity(item.id)
//                         )
//                       }
//                     >
//                       −
//                     </button>

//                     <span>
//                       {item.quantity}
//                     </span>

//                     <button
//                       onClick={() =>
//                         dispatch(
//                           increaseQuantity(item.id)
//                         )
//                       }
//                     >
//                       +
//                     </button>

//                   </div>


//                   {/* REMOVE */}

//                   <button
//                     className="drawer-remove"
//                     onClick={() =>
//                       dispatch(
//                         removeFromCart(item.id)
//                       )
//                     }
//                   >
//                     Remove
//                   </button>

//                 </div>

//               </div>

//             ))

//           )}

//         </div>


//         {/* FOOTER */}

//         {cartItems.length > 0 && (

//           <div className="cart-drawer-footer">

//             {/* SUBTOTAL */}

//             <div className="drawer-price-row">

//               <span>Subtotal:</span>

//               <strong>
//                 ₹{subtotal.toFixed(2)}
//               </strong>

//             </div>


//             {/* TOTAL */}

//             <div className="drawer-price-row total-row">

//               <span>Total:</span>

//               <strong>
//                 ₹{total.toFixed(2)}
//               </strong>

//             </div>


//             {/* VIEW CART */}

//             <button
//               className="view-cart-btn"
//               onClick={handleViewCart}
//             >
//               VIEW CART
//             </button>


//             {/* CHECKOUT */}

//             <button
//               className="checkout-btn"
//               onClick={handleCheckout}
//             >
//               CHECKOUT
//             </button>

//           </div>

//         )}

//       </div>
//     </>
//   );
// }

// export default CartDrawer;
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } from "../../redux/cartSlice";

// import "./CartDrawer.css";

// function CartDrawer({ isOpen, onClose }) {
//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   // =========================
//   // SUBTOTAL CALCULATION
//   // =========================

//   const subtotal = cartItems.reduce(
//     (total, item) => {
//       const price = Number(item.price);
//       const quantity = Number(item.quantity);

//       return total + price * quantity;
//     },
//     0
//   );


//   // =========================
//   // TOTAL
//   // =========================

//   const total = subtotal;


//   // =========================
//   // VIEW CART
//   // =========================

//   const handleViewCart = () => {
//     onClose();
//     navigate("/cart");
//   };


//   // =========================
//   // CHECKOUT
//   // =========================

//   const handleCheckout = () => {
//     onClose();
//     navigate("/checkout");
//   };


//   return (
//     <>
//       {/* OVERLAY */}

//       {isOpen && (
//         <div
//           className="cart-overlay"
//           onClick={onClose}
//         ></div>
//       )}


//       {/* CART DRAWER */}

//       <div
//         className={`cart-drawer ${
//           isOpen ? "cart-drawer-open" : ""
//         }`}
//       >


//         {/* =========================
//             HEADER
//         ========================= */}

//         <div className="cart-drawer-header">

//           <h2>Shopping Cart</h2>

//           <button
//             className="cart-close"
//             onClick={onClose}
//           >
//             ×
//           </button>

//         </div>


//         {/* =========================
//             CART ITEMS
//         ========================= */}

//         <div className="cart-drawer-items">

//           {cartItems.length === 0 ? (

//             <div className="empty-drawer">

//               <p>Your cart is empty</p>

//             </div>

//           ) : (

//             cartItems.map((item) => {

//               const price = Number(item.price);
//               const quantity = Number(item.quantity);


//               return (

//                 <div
//                   className="drawer-cart-item"
//                   key={item.id}
//                 >


//                   {/* PRODUCT IMAGE */}

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                   />


//                   {/* PRODUCT DETAILS */}

//                   <div className="drawer-item-details">

//                     <h3>
//                       {item.title}
//                     </h3>


//                     {/* ORIGINAL PRICE */}

//                     <p className="drawer-product-price">

//                       ₹{price.toFixed(2)}

//                     </p>


//                     {/* QUANTITY */}

//                     <div className="drawer-quantity">

//                       <button
//                         onClick={() =>
//                           dispatch(
//                             decreaseQuantity(item.id)
//                           )
//                         }
//                       >
//                         −
//                       </button>


//                       <span>
//                         {quantity}
//                       </span>


//                       <button
//                         onClick={() =>
//                           dispatch(
//                             increaseQuantity(item.id)
//                           )
//                         }
//                       >
//                         +
//                       </button>

//                     </div>


//                     {/* PRODUCT TOTAL */}

//                     <p className="drawer-item-total">

//                       ₹{(
//                         price * quantity
//                       ).toFixed(2)}

//                     </p>


//                     {/* REMOVE */}

//                     <button
//                       className="drawer-remove"
//                       onClick={() =>
//                         dispatch(
//                           removeFromCart(item.id)
//                         )
//                       }
//                     >
//                       Remove
//                     </button>

//                   </div>

//                 </div>

//               );

//             })

//           )}

//         </div>


//         {/* =========================
//             FOOTER
//         ========================= */}

//         {cartItems.length > 0 && (

//           <div className="cart-drawer-footer">


//             {/* SUBTOTAL */}

//             <div className="drawer-price-row">

//               <span>
//                 Subtotal:
//               </span>

//               <strong>
//                 ₹{subtotal.toFixed(2)}
//               </strong>

//             </div>


//             {/* TOTAL */}

//             <div className="drawer-price-row total-row">

//               <span>
//                 Total:
//               </span>

//               <strong>
//                 ₹{total.toFixed(2)}
//               </strong>

//             </div>


//             {/* VIEW CART */}

//             <button
//               className="view-cart-btn"
//               onClick={handleViewCart}
//             >
//               VIEW CART
//             </button>


//             {/* CHECKOUT */}

//             <button
//               className="checkout-btn"
//               onClick={handleCheckout}
//             >
//               CHECKOUT
//             </button>

//           </div>

//         )}

//       </div>
//     </>
//   );
// }

// export default CartDrawer;
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } from "../../redux/cartSlice";

// import "./CartDrawer.css";

// function CartDrawer({ isOpen, onClose }) {
//   const cartItems = useSelector(
//     (state) => state.cart.items
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   // =========================
//   // SUBTOTAL
//   // =========================

//   const subtotal = cartItems.reduce(
//     (total, item) => {
//       const price = Number(item.price) || 0;
//       const quantity = Number(item.quantity) || 1;

//       return total + price * quantity;
//     },
//     0
//   );


//   // =========================
//   // TOTAL
//   // =========================

//   const total = subtotal;


//   // =========================
//   // VIEW CART
//   // =========================

//   const handleViewCart = () => {
//     onClose();
//     navigate("/cart");
//   };


//   // =========================
//   // CHECKOUT
//   // =========================

//   const handleCheckout = () => {
//     onClose();
//     navigate("/checkout");
//   };


//   return (
//     <>
//       {/* OVERLAY */}

//       {isOpen && (
//         <div
//           className="cart-overlay"
//           onClick={onClose}
//         ></div>
//       )}


//       {/* CART DRAWER */}

//       <div
//         className={`cart-drawer ${
//           isOpen ? "cart-drawer-open" : ""
//         }`}
//       >


//         {/* HEADER */}

//         <div className="cart-drawer-header">

//           <h2>Shopping Cart</h2>

//           <button
//             className="cart-close"
//             onClick={onClose}
//           >
//             ×
//           </button>

//         </div>


//         {/* CART ITEMS */}

//         <div className="cart-drawer-items">

//           {cartItems.length === 0 ? (

//             <div className="empty-drawer">
//               <p>Your cart is empty</p>
//             </div>

//           ) : (

//             cartItems.map((item) => {

//               const price = Number(item.price) || 0;
//               const quantity = Number(item.quantity) || 1;

//               const productTotal =
//                 price * quantity;


//               return (

//                 <div
//                   className="drawer-cart-item"
//                   key={item.id}
//                 >


//                   {/* PRODUCT IMAGE */}

//                   <img
//                     src={item.image}
//                     alt={item.title}
//                   />


//                   {/* PRODUCT DETAILS */}

//                   <div className="drawer-item-details">

//                     <h3>
//                       {item.title}
//                     </h3>


//                     {/* PRICE × QUANTITY = TOTAL */}

//                     <div className="drawer-price-quantity">

//                       <span className="product-price">
//                         ₹{price.toFixed(2)}
//                       </span>

//                       <span className="multiply">
//                         ×
//                       </span>

//                       <span className="product-quantity">
//                         {quantity}
//                       </span>

//                       <span className="equals">
//                         =
//                       </span>

//                       <strong className="product-total">
//                         ₹{productTotal.toFixed(2)}
//                       </strong>

//                     </div>


//                     {/* QUANTITY BUTTONS */}

//                     <div className="drawer-quantity">

//                       <button
//                         onClick={() =>
//                           dispatch(
//                             decreaseQuantity(item.id)
//                           )
//                         }
//                       >
//                         −
//                       </button>


//                       <span>
//                         {quantity}
//                       </span>


//                       <button
//                         onClick={() =>
//                           dispatch(
//                             increaseQuantity(item.id)
//                           )
//                         }
//                       >
//                         +
//                       </button>

//                     </div>


//                     {/* REMOVE */}

//                     <button
//                       className="drawer-remove"
//                       onClick={() =>
//                         dispatch(
//                           removeFromCart(item.id)
//                         )
//                       }
//                     >
//                       Remove
//                     </button>

//                   </div>

//                 </div>

//               );

//             })

//           )}

//         </div>


//         {/* FOOTER */}

//         {cartItems.length > 0 && (

//           <div className="cart-drawer-footer">


//             {/* SUBTOTAL */}

//             <div className="drawer-price-row">

//               <span>
//                 Subtotal:
//               </span>

//               <strong>
//                 ₹{subtotal.toFixed(2)}
//               </strong>

//             </div>


//             {/* TOTAL */}

//             {/* <div className="drawer-price-row total-row">

//               <span>
//                 Total:
//               </span>

//               <strong>
//                 ₹{total.toFixed(2)}
//               </strong>

//             </div> */}


//             {/* VIEW CART */}

//             <button
//               className="view-cart-btn"
//               onClick={handleViewCart}
//             >
//               VIEW CART
//             </button>


//             {/* CHECKOUT */}

//             <button
//               className="checkout-btn"
//               onClick={handleCheckout}
//             >
//               CHECKOUT
//             </button>

//           </div>

//         )}

//       </div>
//     </>
//   );
// }

// export default CartDrawer;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;

    return total + price * quantity;
  }, 0);

  // =========================
  // VIEW CART
  // =========================

  const handleViewCart = () => {
    onClose();
    navigate("/cart");
  };

  // =========================
  // CHECKOUT
  // =========================

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      {/* OVERLAY */}

      {isOpen && (
        <div
          className="cart-overlay"
          onClick={onClose}
        ></div>
      )}

      {/* CART DRAWER */}

      <div
        className={`cart-drawer ${
          isOpen ? "cart-drawer-open" : ""
        }`}
      >

        {/* HEADER */}

        <div className="cart-drawer-header">

          <h2>Shopping Cart</h2>

          <button
            className="cart-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        {/* CART ITEMS */}

        <div className="cart-drawer-items">

          {cartItems.length === 0 ? (

            <div className="empty-drawer">
              <p>Your cart is empty</p>
            </div>

          ) : (

            cartItems.map((item) => {

              const price = Number(item.price) || 0;
              const quantity = Number(item.quantity) || 1;

              const productTotal = price * quantity;

              return (
                <div
                  className="drawer-cart-item"
                  key={item.id}
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  {/* DETAILS */}

                  <div className="drawer-item-details">

                    <h3>{item.title}</h3>

                    {/* PRICE × QUANTITY */}

                    <div className="drawer-price-quantity">

                      <span className="product-price">
                        ₹{price.toFixed(2)}
                      </span>

                      <span className="multiply">
                        ×
                      </span>

                      <span className="product-quantity">
                        {quantity}
                      </span>

                      <span className="equals">
                        =
                      </span>

                      <strong className="product-total">
                        ₹{productTotal.toFixed(2)}
                      </strong>

                    </div>

                    {/* QUANTITY */}

                    <div className="drawer-quantity">

                      <button
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(item.id)
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {quantity}
                      </span>

                      <button
                        onClick={() =>
                          dispatch(
                            increaseQuantity(item.id)
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                    {/* REMOVE */}

                    <button
                      className="drawer-remove"
                      onClick={() =>
                        dispatch(
                          removeFromCart(item.id)
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>
              );
            })
          )}

        </div>

        {/* FOOTER */}

        {cartItems.length > 0 && (

          <div className="cart-drawer-footer">

            {/* SUBTOTAL */}

            <div className="drawer-price-row">

              <span>
                Subtotal:
              </span>

              <strong>
                ₹{subtotal.toFixed(2)}
              </strong>

            </div>

            {/* VIEW CART */}

            {/* <button
              className="view-cart-btn"
              onClick={handleViewCart}
            >
              VIEW CART
            </button> */}

            {/* CHECKOUT */}

            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              CHECKOUT
            </button>

          </div>

        )}

      </div>
    </>
  );
}

export default CartDrawer;