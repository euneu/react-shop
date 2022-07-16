import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InputGroup, Form, Button } from "react-bootstrap";
import { addProduct } from "../store/productSlice";

function Detail({ shoes }) {
  let { id } = useParams();
  const [show, setShow] = useState(true);
  const [product, setProduct] = useState(0);
  let shoesFind = shoes.find((x) => x.id == id);
  let [fade, setFade] = useState("");
  let dispatch = useDispatch();

  const onChange = (e) => {
    setProduct(e.target.value);
  };

  //useEffect는 html렌더링 후에 동작
  useEffect(() => {
    let timer = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => {
      //clean up function
      //이게 먼저 실행되면서 useEffect가 실행되기 전에 먼저 실행됨
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    if (isNaN(product)) {
      alert("숫자만 입력하세요");
    }
  }, [product]);

  useEffect(() => {
    setTimeout(() => {
      setFade("fadeEnd");
    }, 10);
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={`container fadeStart ${fade}`}>
      {show ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              shoesFind.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoesFind.title}</h4>
          <p>{shoesFind.content}</p>
          <p>{shoesFind.price}</p>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={onChange}
              value={product}
              placeholder="수량을 입력하세요"
            />
            <Button
              onClick={() => {
                dispatch(
                  addProduct({ id: id, name: shoesFind.title, count: product })
                );
              }}
              variant="outline-secondary"
              id="button-addon2"
            >
              주문하기
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
export default Detail;
