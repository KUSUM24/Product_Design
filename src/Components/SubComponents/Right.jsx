import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LinkIcon from "@material-ui/icons/Link";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "../../Assets/css/right.css";
import BeatImage from "../../Assets/images/beatsNew.png";
import Billie from "../../Assets/images/Billie.png";
import Add from "@material-ui/icons/Add";

export const Right = () => {
  return (
    <div className="right">
      <div className="right-heading d-flex justify-content-end align-items-center">
        <NotificationsNoneIcon />
        <div className="initial d-flex justify-content-center align-items-center">
          K
        </div>
      </div>
      <div className="billie text-center">
        <img src={Billie} style={{ width: "150px", height: "150px" }}></img>
      </div>
      <div>
        <div className="singer text-center">
          <b>Billie Eilish</b>
          <div style={{ color: "#b7b9c4", fontSize: "90%" }}>
            <b>15 MB Modified 3 hours ago</b>
          </div>
        </div>
      </div>
      <div className="text-center">
        <img
          src={BeatImage}
          alt="Error"
          style={{ width: "200px", height: "80px", margin: "0% 0% 10% 0%" }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="d-flex justify-content-between w-50">
          <span className="icon-right-same">
            <LinkIcon />
          </span>
          <span className="icon-right-same">
            <MoreVertIcon />
          </span>
          <span className="icon-right-diff">
            <PlayArrowIcon />
          </span>
        </div>
      </div>
      <hr className="hr-right" />
      <div className="d-flex">
        <div className="circle-right c1 d-flex justify-content-center align-items-center">
          K
        </div>
        <div className="circle-right c2 d-flex justify-content-center align-items-center">
          R
        </div>
        <div className="circle-right c3 d-flex justify-content-center align-items-center">
          J
        </div>
        <div className="circle-right c4 d-flex justify-content-center align-items-center">
          <Add />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="circle-right d-flex justify-content-center align-items-center w-25">
          K
        </div>
        <div style={{ margin: "0% 4%" }}>
          <span style={{ color: "#0c2480" }}>
            <b>@Marie </b>
          </span>
          We need to make sure to review the cover
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="circle-right d-flex justify-content-center align-items-center ">
          J
        </div>
        <div className="comment">Write a comment</div>
      </div>
    </div>
  );
};
