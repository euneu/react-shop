import "./App.css";
import propTypes from "prop-types";
import { Button, Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";

function App() {
  let [shoes, setShoses] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* 메인 화면 */}
      <div className="main-bg"></div>
      {/* 신발 레이아웃 */}
      {shoes.map((shoes, index) => (
        <List id={index} title={shoes.title} />
      ))}
    </div>
  );
}

function List(id, title) {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <img
            src={`https://codingapple1.github.io/shop/shoes1.jpg`}
            width={"80%"}
          />
          <p>{title}</p>
        </Col>
        <Col md={4}>
          <img
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            width={"80%"}
          />
        </Col>
        <Col md={4}>
          <img
            src="https://codingapple1.github.io/shop/shoes3.jpg"
            width={"80%"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
