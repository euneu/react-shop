import data from "../data.js";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import Shoes from "../components/Shoes";
import axios from "axios";

function Home({ shoes }) {
  let [newShoes, setNewShoses] = useState(shoes);
  let [click, setClick] = useState(0);
  const [btnShow, setBtnShow] = useState(true);
  return (
    <div className="App">
      {/* 메인 화면 */}
      <div className="main-bg"></div>
      {/* 신발 레이아웃 */}
      <Container>
        <Row>
          {newShoes.map((shoes, index) => (
            <Shoes
              id={index}
              title={shoes.title}
              content={shoes.content}
              price={shoes.price}
            />
          ))}
        </Row>
      </Container>
      <div>
        {btnShow ? (
          <button
            onClick={() => {
              if (click == 0) {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    //spread 연산자
                    let copy = [...newShoes, ...result.data];
                    setNewShoses(copy);
                    console.log(copy);
                  })
                  .catch(() => {
                    console.log("전송 실패");
                  });
              } else {
                //상품이 없다는 알림창
                alert("상품이 없습니다");
                //버튼 숨겨
                setBtnShow(false);
              }
              setClick((current) => current + 1);
            }}
          >
            추가
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
