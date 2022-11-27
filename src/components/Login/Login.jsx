import "../Login/Login.css";
import React from "react";
import { Hash } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
