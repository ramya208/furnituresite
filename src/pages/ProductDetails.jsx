// // import "./ProductDetails.css";
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { addToCart } from "../redux/cartSlice";

// const products = [
//   {
//     id: 1,
//     name: "VINTAGE TELEPHONE",
//     price: 420,
//     image: "/images/telephone.jpg",
//     sku: "008",
//     categories: "Architecturals, Art deco, Desks, Lighting, Sofas",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },

//   {
//     id: 2,
//     name: "VINTAGE CAMERA",
//     price: 350,
//     image: "/images/camera.jpg",
//     sku: "009",
//     categories: "Cameras, Vintage, Electronics",
//     description:
//       "Beautiful vintage camera with a classic design."
//   },

//   {
//     id: 3,
//     name: "VINTAGE LAMP",
//     price: 280,
//     image: "/images/lamp.jpg",
//     sku: "010",
//     categories: "Lighting, Vintage, Home",
//     description:
//       "Classic vintage lamp suitable for home decoration."
//   }
// ];

// function ProductDetails() {

//   const { id } = useParams();

//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const [quantity, setQuantity] = useState(1);

//   const product = products.find(
//     item => item.id === Number(id)
//   );

//   if (!product) {
//     return <h2>Product Not Found</h2>;
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
//         quantity: quantity
//       })
//     );

//     navigate("/cart");
//   };

//   return (

//     <div className="product-details">

//       {/* LEFT IMAGE */}

//       <div className="product-image">

//         <img
//           src={product.image}
//           alt={product.name}
//         />

//       </div>


//       {/* RIGHT CONTENT */}

//       <div className="product-info">

//         <h1>{product.name}</h1>

//         <h3>${product.price}.00</h3>

//         <p className="description">
//           {product.description}
//         </p>


//         {/* QUANTITY */}

//         <div className="quantity-section">

//           <button onClick={decreaseQuantity}>
//             -
//           </button>

//           <span>{quantity}</span>

//           <button onClick={increaseQuantity}>
//             +
//           </button>

//           <button
//             className="add-cart-btn"
//             onClick={handleAddToCart}
//           >
//             ADD TO CART
//           </button>

//         </div>


//         <p>
//           SKU: {product.sku}
//         </p>

//         <p>
//           CATEGORIES: {product.categories}
//         </p>


//         {/* EXTRA INFORMATION */}

//         <div className="product-tabs">

//           <div>DESCRIPTION</div>

//           <div>ADDITIONAL INFORMATION</div>

//           <div>REVIEWS (0)</div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default ProductDetails;
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";

const products = [
  {
    id: 1,
    name: "VINTAGE TELEPHONE",
    price: 420,
    image: "/images/telephone.jpg",
    sku: "008",
    categories: "Architecturals, Art deco, Desks, Lighting, Sofas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },

  {
    id: 2,
    name: "VINTAGE CAMERA",
    price: 350,
    image: "/images/camera.jpg",
    sku: "009",
    categories: "Cameras, Vintage, Electronics",
    description:
      "Beautiful vintage camera with a classic design."
  },

  {
    id: 3,
    name: "VINTAGE LAMP",
    price: 280,
    image: "/images/lamp.jpg",
    sku: "010",
    categories: "Lighting, Vintage, Home",
    description:
      "Classic vintage lamp suitable for home decoration."
  }
];

function ProductDetails() {

  const { id } = useParams();

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = () => {
    setQuantity((prev) =>
      prev > 1 ? prev - 1 : 1
    );
  };

  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = () => {

    dispatch(
      addToCart({
        ...product,
        title: product.name,
        quantity: quantity
      })
    );

  };

  return (
    <div className="product-details">

      {/* LEFT IMAGE */}

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      {/* RIGHT CONTENT */}

      <div className="product-info">

        <h1>{product.name}</h1>

        <h3>
          ₹{product.price}.00
        </h3>

        <p className="description">
          {product.description}
        </p>

        {/* QUANTITY */}

        <div className="quantity-section">

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

          {/* ADD TO CART */}

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

        </div>

        {/* PRODUCT INFORMATION */}

        <p>
          SKU: {product.sku}
        </p>

        <p>
          CATEGORIES: {product.categories}
        </p>

        {/* PRODUCT TABS */}

        <div className="product-tabs">

          <div>
            DESCRIPTION
          </div>

          <div>
            ADDITIONAL INFORMATION
          </div>

          <div>
            REVIEWS (0)
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;