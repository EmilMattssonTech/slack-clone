import React from "react";
import "./SidebarChanels.css";
import { Hash } from "react-feather";
import { Link, Routes, Route } from "react-router-dom";
import Channel from "./Channel/Channel";
import { useParams } from "react-router-dom";

export default function SidebarChanels() {
  const { id } = useParams();
  const channels = ["gibb", "random", "batch3"];
  return (
    <ul className="sidebar-chanels">
      {channels.map((channel) => {
        return (
          <li className={`channel ${id === channel ? "active" : ""}`}>
            <Link to={`/main/${channel}`}>
              <Hash />
              {channel}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
