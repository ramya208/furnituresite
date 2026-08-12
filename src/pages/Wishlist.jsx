import { useDispatch, useSelector } from "react-redux";

import {
  removeFromWishlist,
} from "../redux/wishlistSlice";

import {
  addToCart,
} from "../redux/cartSlice";

import "./Wishlist.css";

function Wishlist() {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );


  const handleAddToCart = (product) => {

    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );

  };


  return (
    <div className="wishlist-page">

      <h1>MY WISHLIST</h1>


      {wishlistItems.length === 0 ? (

        <div className="empty-wishlist">

          <h2>Your wishlist is empty ♡</h2>

          <p>
            Add your favourite products to your wishlist.
          </p>

        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlistItems.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              <div className="wishlist-image">

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>


              <h3>
                {product.title}
              </h3>


              <p>
                {product.price}
              </p>


              <div className="wishlist-actions">

                {/* <button
                  onClick={() =>
                    handleAddToCart(product)
                  }
                >
                  ADD TO CART
                </button> */}


                <button
                  onClick={() =>
                    dispatch(
                      removeFromWishlist(product.id)
                    )
                  }
                >
                  REMOVE
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;