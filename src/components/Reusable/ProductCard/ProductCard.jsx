// // import "./ProductCard.css";
// // // import productone from "../../assets/productone.jpg"

// // function ProductCard({ image, title, price }) {
// //   return (
// //     <div className="product-card">

// //       <div className="product-image">
// //       <img src={image} alt={title} />
// //       </div>

// //       <div className="product-details">
// //         <h3>{title}</h3>
// //         <p>{price}</p>
// //       </div>

// //     </div>
// //   );
// // }

// // export default ProductCard;
// // import "./ProductCard.css";
// // import { useNavigate } from "react-router-dom";

// // function ProductCard({ image, title, price }) {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="product-card">

// //       <div
// //         className="product-image"
// //         onClick={() => navigate("/cart")}
// //       >
// //         <img src={image} alt={title} />
// //       </div>

// //       <div className="product-details">
// //         <h3>{title}</h3>
// //         <p>{price}</p>
// //       </div>

// //     </div>
// //   );
// // }

// // export default ProductCard;
// // import { useNavigate } from "react-router-dom";
// // import "./ProductCard.css";

// // function ProductCard({ product }) {
// //   const navigate = useNavigate();

// //   const handleClick = () => {
// //     navigate(`/product/${product.id}`);
// //   };

// //   return (
// //     <div
// //       className="product-card"
// //       onClick={handleClick}
// //     >
// //       <img
// //         src={product.image}
// //         alt={product.name}
// //       />

// //       <h2>{product.name}</h2>

// //       <p>₹{product.price}.00</p>
// //     </div>
// //   );
// // }

// // export default ProductCard;
// // import { useNavigate } from "react-router-dom";
// // import "./ProductCard.css";

// // function ProductCard({ image, title, price, id }) {
// //   const navigate = useNavigate();

// //   const handleClick = () => {
// //     navigate(`/product/${id}`);
// //   };

// //   return (
// //     <div className="product-card" onClick={handleClick}>
// //       <div className="product-image">
// //         <img src={image} alt={title} />
// //       </div>

// //       <div className="product-details">
// //         <h3>{title}</h3>
// //         <p>{price}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductCard;
// import { useNavigate } from "react-router-dom";
// import "./ProductCard.css";

// function ProductCard({ image, title, price, id }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/cart", {
//       state: {
//         id,
//         image,
//         title,
//         price,
//         description:
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         sku: "008",
//         categories:
//           "Architecturals, Art deco, Desks, Lighting, Sofas",
//       },
//     });
//   };

//   return (
//     <div className="product-card" onClick={handleClick}>
//       <div className="product-image">
//         <img src={image} alt={title} />
//       </div>

//       <div className="product-details">
//         <h3>{title}</h3>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/wishlistSlice";

import "./ProductCard.css";

function ProductCard({
  image,
  title,
  price,
  id,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();


  // Wishlist products

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );


  // Check product already wishlist-la irukka?

  const isWishlist = wishlistItems.some(
    (item) => item.id === id
  );


  // Product click

  const handleClick = () => {
    navigate("/cart", {
      state: {
        id,
        image,
        title,
        price,

        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        sku: "008",

        categories:
          "Architecturals, Art deco, Desks, Lighting, Sofas",
      },
    });
  };


  // Wishlist click

  const handleWishlist = (e) => {

    // Product click ஆகாமல் stop பண்ணும்

    e.stopPropagation();


    if (isWishlist) {

      dispatch(
        removeFromWishlist(id)
      );

    } else {

      dispatch(
        addToWishlist({
          id,
          image,
          title,
          price,
        })
      );

    }
  };


  return (
    <div
      className="product-card"
      onClick={handleClick}
    >


      {/* HEART */}

      <button
        type="button"
        className="wishlist-btn"
        onClick={handleWishlist}
      >
        {isWishlist ? "♥" : "♡"}
      </button>


      {/* IMAGE */}

      <div className="product-image">

        <img
          src={image}
          alt={title}
        />

      </div>


      {/* DETAILS */}

      <div className="product-details">

        <h3>
          {title}
        </h3>

        <p>
          {price}
        </p>

      </div>

    </div>
  );
}

export default ProductCard;