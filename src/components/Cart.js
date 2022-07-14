import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { nameChange, ageChange } from "../store/userSlice";

function Cart() {
  //redux store 가져옴
  const product = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  console.log(product);

  return (
    <div>
      <h5>
        {user.name} {user.age}의 장바구니
      </h5>
      <button
        onClick={() => {
          dispatch(ageChange(1));
        }}
      >
        버튼
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>상품 번호</th>
            <th>상품명</th>
            <th>재고</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, i) => (
            <tr key={i}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(nameChange());
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
