import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function InputPassword() {
    return (
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form>
    );
}