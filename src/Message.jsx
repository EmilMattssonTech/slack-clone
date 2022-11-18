import React from "react";
import "./Message.css";

export default function Message() {
  return (
    <div className="message">
      <img src="https://images.aftonbladet-cdn.se/v2/images/9c2a7aea-59f8-4ce4-ab41-2ebf2f4bc2b9?fit=crop&format=auto&h=467&q=50&w=700&s=2683bf266637b022baccd46899d9747295fbfaa0" />
      <div>
        <div>
          <h4>Messi:</h4>
          <h5>Time: 16:00</h5>
        </div>
        <p>Jag vet att cr7 har det svårt just nu...</p>
      </div>
    </div>
  );
}
