import "../Login/Login.css";
import React from "react";
import { Hash } from "react-feather";

export default function Login() {
  return (
    <div className="login">
      <h1>Please Login hello</h1>

      <button
        onClick={() => {
          console.log("Logging in...");
        }}
      >
        <Hash style={{ width: "20px" }} />
        login
      </button>
    </div>
  );
}
