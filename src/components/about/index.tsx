import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";

export default function About(props : {name :string, mobile : number, email : string, status : string}) {
  return (
    <div className="col-lg-8">
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Full Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{props.name}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{props.email}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Mobile</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{props.mobile}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Status</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{props.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
