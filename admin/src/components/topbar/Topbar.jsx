import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logoutRequest } from "../../context/authContext/apiCalls";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = (e) => {
    logoutRequest(dispatch)
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
           onClick={handleLogout}
           src="https://media-exp1.licdn.com/dms/image/C5603AQEciiR9b5STuQ/profile-displayphoto-shrink_100_100/0/1570028147976?e=1669852800&v=beta&t=HcwSnWGjIIyjIl2vftrmxncu4sKUVmvvr4LextetWmE" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
