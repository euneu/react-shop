import "./App.css";
import data from "./data";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Cart from "./components/Cart";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  //로컬스토리지가 비었을 경우만 실행하도록
  useEffect(() => {
    if (localStorage.getItem("watched") == null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  let [shoes, setShoses] = useState(data);
  let navigate = useNavigate();

  let result = useQuery("작명", () =>
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      return a.data;
    })
  );

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading ? "로딩중" : result.data.name}
            {result.error && "에러"}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} />}></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<h2>Error</h2>} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일 기념 쿠폰받기</p>} />
        </Route>
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
