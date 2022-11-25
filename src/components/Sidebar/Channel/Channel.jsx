import React from "react";
import { useParams } from "react-router-dom";
import "./Channel.css";

export default function Gibb() {
  const { id } = useParams();
  return <div className="channel-id">Channel {id}</div>;
}
