import { Col } from "react-bootstrap";
function Shoes({ id, title, content, price }) {
  return (
    <Col md={4}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        width={"80%"}
      />
      <h4>{title}</h4>
      <p>{content}</p>
      <h6>{price}</h6>
    </Col>
  );
}
export default Shoes;
