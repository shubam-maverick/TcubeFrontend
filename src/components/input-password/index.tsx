import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function InputPassword() {
    return (
      <div className="row form-outline">
        <div className="col-2">
          <label className="form-label" htmlFor="typeEmail">
            Password
          </label>
        </div>
        <div className="col-10">
          <input type="pasword" id="typePassword" className="form-control" />
        </div>
      </div>
    );
}