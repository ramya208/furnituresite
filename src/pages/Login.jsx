import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Login
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      alert("Login successful!");

      // Go to Home
      navigate("/");

    } catch (error) {
      console.log(error);

      if (
        error.code === "auth/invalid-credential"
      ) {
        alert("Invalid email or password.");
      } else if (
        error.code === "auth/user-not-found"
      ) {
        alert("User not found. Please signup first.");
      } else if (
        error.code === "auth/wrong-password"
      ) {
        alert("Wrong password.");
      } else if (
        error.code === "auth/invalid-email"
      ) {
        alert("Please enter a valid email.");
      } else {
        alert(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-box">

        <h1>LOGIN</h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "LOGGING IN..." : "LOGIN"}
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <span
            className="auth-link"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;