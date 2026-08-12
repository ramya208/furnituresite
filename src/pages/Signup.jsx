// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";

// import { auth } from "../firebase";

// import "./Auth.css";

// function Signup() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Create account
//       const userCredential =
//         await createUserWithEmailAndPassword(
//           auth,
//           email.trim(),
//           password
//         );

//       // Get user
//       const user = userCredential.user;

//       // Save username
//       await updateProfile(user, {
//         displayName: username.trim(),
//       });

//       alert("Signup successful!");

//       // Go to login
//       navigate("/login");

//     } catch (error) {
//       console.log(error);

//       if (error.code === "auth/email-already-in-use") {
//         alert("Email already registered. Please login.");
//       } else if (error.code === "auth/invalid-email") {
//         alert("Please enter a valid email.");
//       } else if (error.code === "auth/weak-password") {
//         alert("Password must be at least 6 characters.");
//       } else {
//         alert(error.message);
//       }

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">

//       <div className="auth-box">

//         <h1>SIGN UP</h1>

//         <form onSubmit={handleSignup}>

//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "CREATING..." : "SIGN UP"}
//           </button>

//         </form>

//         <p>
//           Already have an account?{" "}
//           <span
//             className="auth-link"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      alert("Please enter username");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      // Create Firebase account
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );

      const user = userCredential.user;

      // Save username
      await updateProfile(user, {
        displayName: username.trim(),
      });

      // Clear input fields
      setUsername("");
      setEmail("");
      setPassword("");

      alert("Signup successful!");

      // Go to Login page
      navigate("/login");

    } catch (error) {
      console.log("SIGNUP ERROR:", error);

      if (error.code === "auth/email-already-in-use") {
        alert("Email already registered. Please login.");
      } else if (error.code === "auth/invalid-email") {
        alert("Please enter a valid email.");
      } else if (error.code === "auth/weak-password") {
        alert("Password must be at least 6 characters.");
      } else {
        alert("Signup failed: " + error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-box">

        <h1>SIGN UP</h1>

        <form
          onSubmit={handleSignup}
          autoComplete="off"
        >

          {/* USERNAME */}

          <input
            type="text"
            name="signup-username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required
          />


          {/* EMAIL */}

          <input
            type="email"
            name="signup-email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />


          {/* PASSWORD */}

          <input
            type="password"
            name="signup-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />


          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "CREATING..." : "SIGN UP"}
          </button>

        </form>


        {/* LOGIN LINK */}

        <p>
          Already have an account?{" "}

          <span
            className="auth-link"
            onClick={() => navigate("/login")}
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Signup;