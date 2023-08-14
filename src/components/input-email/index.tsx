import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Row, Col } from "react-bootstrap";

export default function InputEmail() {
    return (
      <div className="row form-outline">
        <div className="col-2">
          <label className="form-label" htmlFor="typeEmail">
            Email
          </label>
        </div>
        <div className="col-10">
          <input type="email" id="typeEmail" className="form-control" />
        </div>
      </div>
    );
}