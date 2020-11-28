import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./contact.css";

function Contact() {
  return (
    <form>
      <Container>
        <Row>
          <Col size="sm-12 md-6">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </Col>
        </Row>
        <Row>
          <Col size="sm-12 md-6">
            <label htmlFor="exampleFormControlInput2">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Email"
            />
          </Col>
        </Row>
        <Row>
          <Col size="sm-12 md-6">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Message"
            ></textarea>
          </Col>
        </Row>
        <button id="button" type="button" className="btn-light">Submit</button>
      </Container>
    </form>
  );
}

export default Contact;
