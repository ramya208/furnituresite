// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// // import Features from "./components/Features/Features";
// // import Products from "./components/Products/Products";
// // import Instagram from "./components/Instagram/Instagram";
// import Footer from "./components/Footer/Footer";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Faq from "./pages/Faq";
// import Product from "./pages/Product";
// import Contact from "./pages/Contact";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Auth from "./pages/Auth";

// // import CartPage from "./pages/CartPage";





// function App() {
//   return (
//     <>
//       <Navbar />
//        <Routes>
//         <Route path="/" element={<Signup />} />

// <Route path="/login" element={<Login />} />
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
//    <Route path="/faq" element={<Faq />} />
//    <Route path="/products" element={<Product />} />
//     <Route path="/contact" element={<Contact />} />
//      <Route
//           path="/product/:id"
//           element={<ProductDetails />}
//         />

//         <Route
//           path="/cart"
//           element={<Cart />}
//         />
//         <Route path="/checkout" element={<Checkout />} />
//         {/* <Route path="/cart" element={<CartPage />} /> */}
//         <Route path="/auth" element={<Auth />} />
   
// </Routes>
    
     
//       <Footer/>
//       </>
  
     
    
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Faq from "./pages/Faq";
// import Product from "./pages/Product";
// import Contact from "./pages/Contact";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";

// import Auth from "./pages/Auth";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Wishlist from "./pages/Wishlist";


// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>

//         {/* HOME - WEBSITE OPEN */}
//         <Route path="/" element={<Home />} />

//         {/* AUTH */}
//         <Route path="/auth" element={<Auth />} />

//         {/* SIGNUP */}
//         <Route path="/signup" element={<Signup />} />

//         {/* LOGIN */}
//         <Route path="/login" element={<Login />} />

//         {/* OTHER PAGES */}
//         <Route path="/about" element={<About />} />

//         <Route path="/faq" element={<Faq />} />

//         <Route path="/products" element={<Product />} />

//         <Route path="/contact" element={<Contact />} />

//         <Route
//           path="/product/:id"
//           element={<ProductDetails />}
//         />

//         <Route
//           path="/cart"
//           element={<Cart />}
//         />

//         <Route
//           path="/checkout"
//           element={<Checkout />}
//         />
//         <Route
//   path="/wishlist"
//   element={
//     user
//       ? <Wishlist />
//       : <Navigate to="/" replace />
//   }
// />

//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;
// import { useEffect, useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";

// import { auth } from "./firebase";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Faq from "./pages/Faq";
// import Product from "./pages/Product";
// import Contact from "./pages/Contact";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";

// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Wishlist from "./pages/Wishlist";

// function App() {

//   const [user, setUser] = useState(null);

//   const [loading, setLoading] = useState(true);


//   // Firebase login status

//   useEffect(() => {

//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (currentUser) => {

//         setUser(currentUser);

//         setLoading(false);

//       }
//     );

//     return () => unsubscribe();

//   }, []);


//   // Firebase check ஆகும் வரை

//   if (loading) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <>

//       {/* Navbar */}

//       {user && <Navbar />}


//       <Routes>

//         {/* =========================
//             FIRST OPEN
//         ========================= */}

//         <Route
//           path="/"
//           element={
//             user ? (
//               <Navigate to="/home" replace />
//             ) : (
//               <Signup />
//             )
//           }
//         />


//         {/* =========================
//             SIGNUP
//         ========================= */}

//         <Route
//           path="/signup"
//           element={
//             user ? (
//               <Navigate to="/home" replace />
//             ) : (
//               <Signup />
//             )
//           }
//         />


//         {/* =========================
//             LOGIN
//         ========================= */}

//         <Route
//           path="/login"
//           element={
//             user ? (
//               <Navigate to="/home" replace />
//             ) : (
//               <Login />
//             )
//           }
//         />


//         {/* =========================
//             HOME
//         ========================= */}

//         <Route
//           path="/home"
//           element={
//             user ? (
//               <Home />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             ABOUT
//         ========================= */}

//         <Route
//           path="/about"
//           element={
//             user ? (
//               <About />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             FAQ
//         ========================= */}

//         <Route
//           path="/faq"
//           element={
//             user ? (
//               <Faq />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             PRODUCTS
//         ========================= */}

//         <Route
//           path="/products"
//           element={
//             user ? (
//               <Product />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             CONTACT
//         ========================= */}

//         <Route
//           path="/contact"
//           element={
//             user ? (
//               <Contact />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             PRODUCT DETAILS
//         ========================= */}

//         <Route
//           path="/product/:id"
//           element={
//             user ? (
//               <ProductDetails />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             CART
//         ========================= */}

//         <Route
//           path="/cart"
//           element={
//             user ? (
//               <Cart />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             CHECKOUT
//         ========================= */}

//         <Route
//           path="/checkout"
//           element={
//             user ? (
//               <Checkout />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             WISHLIST
//         ========================= */}

//         <Route
//           path="/wishlist"
//           element={
//             user ? (
//               <Wishlist />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />


//         {/* =========================
//             UNKNOWN URL
//         ========================= */}

//         <Route
//           path="*"
//           element={
//             <Navigate to="/" replace />
//           }
//         />

//       </Routes>


//       {/* Footer */}

//       {user && <Footer />}

//     </>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Firebase login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Firebase status check ஆகும் வரை
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Navbar */}
      {user && <Navbar />}

      <Routes>

        {/* =========================
            HOME / FIRST OPEN
        ========================= */}

        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/home" replace />
            )
          }
        />


        {/* =========================
            SIGNUP
        ========================= */}

        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* =========================
            LOGIN
        ========================= */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* =========================
            HOME
        ========================= */}

        <Route
          path="/home"
          element={
            user ? (
              <Home />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            ABOUT
        ========================= */}

        <Route
          path="/about"
          element={
            user ? (
              <About />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            FAQ
        ========================= */}

        <Route
          path="/faq"
          element={
            user ? (
              <Faq />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            PRODUCTS
        ========================= */}

        <Route
          path="/products"
          element={
            user ? (
              <Product />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            CONTACT
        ========================= */}

        <Route
          path="/contact"
          element={
            user ? (
              <Contact />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            PRODUCT DETAILS
        ========================= */}

        <Route
          path="/product/:id"
          element={
            user ? (
              <ProductDetails />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            CART
        ========================= */}

        <Route
          path="/cart"
          element={
            user ? (
              <Cart />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            CHECKOUT
        ========================= */}

        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            WISHLIST
        ========================= */}

        <Route
          path="/wishlist"
          element={
            user ? (
              <Wishlist />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />


        {/* =========================
            UNKNOWN URL
        ========================= */}

        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />

      </Routes>


      {/* Footer */}
      {user && <Footer />}

    </>
  );
}

export default App;