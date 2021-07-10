import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../../Assets/css/middle.css";

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
          <div className="home h1">Home</div>
        </div>
        <div className="d-flex">
          <div className="image-middle-main d-flex justify-content-center">
            <div className="image-middle">image</div>
          </div>
          <div className="text-start project">
            <div className="h4">Project</div>
            <div>
              <div>We should be ready to reveal the new</div>
              <div>project next week and we are very excited</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
