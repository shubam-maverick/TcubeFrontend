import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Row, Col } from "react-bootstrap";

export default function InputEmail() {
    return (
     <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>
      </Form>
    );
}