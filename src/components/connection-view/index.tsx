import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ConnectionView() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <p>Name</p>
          </div>
          <div className="col-4">
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
        </div>
      </div>
    );
}