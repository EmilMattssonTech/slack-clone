import React from "react";
import "./WriteMessage.css";

export default function WriteMessage() {
  return (
    <div className="write-message">
      <input type="text" id="message-input" placeholder="Message #person" />
    </div>
  );
}
