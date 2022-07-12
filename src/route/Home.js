import data from "../data.js";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import Shoes from "../components/Shoes";

function Home() {
  let [shoes, setShoses] = useState(data);
  return (
    <div className="App">
      {/* 메인 화면 */}
      <div className="main-bg"></div>
      {/* 신발 레이아웃 */}
      <Container>
        <Row>
          {shoes.map((shoes, index) => (
            <Shoes
              id={index}
              title={shoes.title}
              content={shoes.content}
              price={shoes.price}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
