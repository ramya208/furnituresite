import React, { useState } from "react";

import Signup from "./Signup";
import Login from "./Login";

import "./Auth.css";

function Auth() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="auth-page">

      {showLogin ? (
        <Login />
      ) : (
        <Signup />
      )}

      <div className="auth-switch">

        {showLogin ? (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setShowLogin(false)}
              className="auth-link"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setShowLogin(true)}
              className="auth-link"
            >
              Login
            </span>
          </p>
        )}

      </div>

    </div>
  );
}

export default Auth;