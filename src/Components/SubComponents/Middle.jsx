import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../../Assets/css/middle.css";
import CategoryIcon from "@material-ui/icons/Category";
import ReorderIcon from "@material-ui/icons/Reorder";
import AddIcon from "@material-ui/icons/Add";
import LinkIcon from "@material-ui/icons/Link";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export const Middle = () => {
  return (
    <div className="middle d-flex flex-column ">
      <div className="inner-middle text-center">
        <div class="search-main input-group mb-3 w-100">
          <div class="input-group-prepend">
            <span class=" search-icon input-group-text" id="basic-addon1">
              <SearchIcon />
            </span>
          </div>
          <input
            type="text"
            class="search-field form-control"
            placeholder="Search your content"
            aria-label="Search your content"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="text-start">
          <div className="home h1">
            <b>Home</b>
          </div>
        </div>
        <div className="d-flex">
          <div className="image-middle-main d-flex justify-content-center">
            <div className="image-middle">image</div>
          </div>
          <div className="text-start project">
            <div className="project-heading h4">
              <b>Project</b>
            </div>
            <div className="description">
              <div>We should be ready to reveal the new</div>
              <div>project next week and we are very excited</div>
              <div className="checkbox-main">
                <div className="checkbox w-100 text-center">
                  <span style={{ color: "#484f6d " }}>
                    Creating storyboard{" "}
                  </span>
                  <span style={{ color: "#0c2480" }}> @Bruce Patterson</span>
                </div>
                <div className="checkbox w-100 text-center">
                  <s style={{ color: "#a7acbc" }}>
                    Preparing the source files{" "}
                  </s>
                  <span style={{ color: "#0c2480" }}> @Charlie Huff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent d-flex justify-content-between align-items-center">
          <div className="recent-heading h4 m-0">
            <b>Recent</b>
          </div>
          <div className="icons-middle d-flex">
            <div className="icon-middle">
              <img src="https://img.icons8.com/material-outlined/24/000000/four-squares.png" />
            </div>
            <div className="icon-middle">
              <ReorderIcon />{" "}
            </div>
            <div className="icon-middle">
              <AddIcon />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
