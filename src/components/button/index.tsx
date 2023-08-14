import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";

export default function Button() {

  function loginButton(){
    console.error("loginneddd");
  }


  return (
    <div>
      <button type="submit" className="btn btn-primary btn-lg btn-block" >
        Login
      </button>
    </div>
  );
}
