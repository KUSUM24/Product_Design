import React from "react";
import CategoryIcon from "@material-ui/icons/Category";
import "../../Assets/css/left.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Upgrade from "../../Assets/images/upgrade.png";

export const Left = () => {
  return (
    <div className="d-flex flex-column justify-content-between ">
      {/* <CategoryIcon className="icon-left" /> */}
      <i class="fa fa-dropbox icon-left"></i>

      <div className="blue-section">
        <div className=" list-left">
          <ul>
            <b>
              <li className="text-white">Home</li>
            </b>
            <li>Files</li>
            <li>Paper</li>
            <li>Showcase</li>
          </ul>
        </div>
        <div className="image-left-main d-flex justify-content-center">
          <img src={Upgrade} className="image-left"></img>
        </div>
        <div className="personal d-flex justify-content-center">
          <div className="d-flex justify-content-between align-items-center w-50">
            <div className="d-flex flex-column">
              <div className="h6 m-0 text-white ">Personal</div>
              <div style={{ color: "#4859a4" }}>Only you</div>
            </div>
            <div className="arrow-icons d-flex flex-column">
              <KeyboardArrowUpIcon style={{ fontSize: "100%" }} />
              <KeyboardArrowDownIcon style={{ fontSize: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
