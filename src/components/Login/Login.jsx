import "./Login/Login.css";
import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Please Login</h1>

      <button
        onClick={() => {
          console.log("Logging in...");
        }}
      >
        Login
      </button>
    </div>
  );
}
