import { useParams } from "react-router-dom";

function Detail({ shoes }) {
  let { id } = useParams();
  let shoesFind = shoes.find((x) => x.id == id);
  console.log(shoesFind.id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${shoesFind.id}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoesFind.title}</h4>
          <p>{shoesFind.content}</p>
          <p>{shoesFind.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
