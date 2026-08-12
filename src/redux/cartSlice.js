// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: []
// };

// const cartSlice = createSlice({
//   name: "cart",

//   initialState,

//   reducers: {
//     addToCart: (state, action) => {
//       const existingProduct = state.items.find(
//         item => item.id === action.payload.id
//       );

//       if (existingProduct) {
//         existingProduct.quantity += action.payload.quantity;
//       } else {
//         state.items.push(action.payload);
//       }
//     },

//     increaseQuantity: (state, action) => {
//       const product = state.items.find(
//         item => item.id === action.payload
//       );

//       if (product) {
//         product.quantity += 1;
//       }
//     },

//     decreaseQuantity: (state, action) => {
//       const product = state.items.find(
//         item => item.id === action.payload
//       );

//       if (product && product.quantity > 1) {
//         product.quantity -= 1;
//       }
//     },

//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(
//         item => item.id !== action.payload
//       );
//     }
//   }
// });

// export const {
//   addToCart,
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart
// } = cartSlice.actions;

// export default cartSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",

//   initialState,

//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;

//       const existingItem = state.items.find(
//         (item) => item.id === product.id
//       );

//       const quantityToAdd = Number(product.quantity) || 1;

//       if (existingItem) {
//         existingItem.quantity += quantityToAdd;
//       } else {
//         state.items.push({
//           ...product,
//           quantity: quantityToAdd,
//         });
//       }
//     },

//     increaseQuantity: (state, action) => {
//       const item = state.items.find(
//         (item) => item.id === action.payload
//       );

//       if (item) {
//         item.quantity += 1;
//       }
//     },

//     decreaseQuantity: (state, action) => {
//       const item = state.items.find(
//         (item) => item.id === action.payload
//       );

//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },

//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//   },
// });

// export const {
//   addToCart,
//   increaseQuantity,
//   decreaseQuantity,
//   removeFromCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cartItems");

const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      const quantityToAdd = Number(product.quantity) || 1;

      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.items.push({
          ...product,
          quantity: quantityToAdd,
        });
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;