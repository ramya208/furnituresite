// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const wishlistSlice = createSlice({
//   name: "wishlist",

//   initialState,

//   reducers: {
//     addToWishlist: (state, action) => {
//       const product = action.payload;

//       const existingProduct = state.items.find(
//         (item) => item.id === product.id
//       );

//       if (!existingProduct) {
//         state.items.push(product);
//       }
//     },

//     removeFromWishlist: (state, action) => {
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );
//     },

//     clearWishlist: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const {
//   addToWishlist,
//   removeFromWishlist,
//   clearWishlist,
// } = wishlistSlice.actions;

// export default wishlistSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const savedWishlist =
  JSON.parse(localStorage.getItem("wishlist")) || [];

const initialState = {
  items: savedWishlist,
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (!existingProduct) {
        state.items.push(product);

        localStorage.setItem(
          "wishlist",
          JSON.stringify(state.items)
        );
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.items)
      );
    },

    clearWishlist: (state) => {
      state.items = [];

      localStorage.removeItem("wishlist");
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;