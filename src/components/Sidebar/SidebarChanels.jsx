import React from "react";
import "./SidebarChanels.css";
import { Hash } from "react-feather";

export default function SidebarChanels() {
  return (
    <div className="sidebar-chanels">
      <h4 className="channel">
        <Hash />
        gibb
      </h4>
      <h4 className="channel">
        <Hash />
        random
      </h4>
      <h4 className="channel">
        <Hash />
        batch-3
      </h4>
    </div>
  );
}
