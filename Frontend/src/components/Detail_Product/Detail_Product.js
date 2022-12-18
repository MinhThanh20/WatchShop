import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Detail_Product.scss";
function Detail_Product() {
  const severPublic = "http://localhost:8000/images/";
  const [count, setCount] = useState(1);
  let str = "/detail/";
  let url = window.location.pathname;
  let id = url.slice(str.length);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  //Func
  const handleSubmit = (e) => {
    e.preventDefault();
    if (count < product.number) {
      navigate(`/cart/${id}`, {
        state: {
          count: count,
          price: product.price,
          image: product.image,
        },
      });
    } else alert("Quá số lượng trong kho");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/product/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={product.image ? severPublic + product.image : ""}
              height="400px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="display-5 fw-bold">{product.name}</h3>
            <hr />
            <h2 className="my-4">{product.price} đ</h2>
            <h5>Số lượng: {product.number}</h5>
            <p className="lead">{product.description}</p>
            <div className="buttons_added">
              <input
                onClick={() => {
                  setCount(Math.max(count - 1, 1));
                }}
                className="minus is-form"
                type="button"
                value="-"
              />
              <input
                aria-label="quantity"
                className="input-qty"
                value={count}
              />
              <input
                onClick={() => {
                  setCount(count + 1);
                }}
                className="plus is-form"
                type="button"
                value="+"
              />
              {/* <Link
                to={`/cart/${id}`}
                state={{
                  count: count,
                  price: product.price,
                  image: product.image,
                }}
              > */}
              <button
                className="btn "
                style={{
                  marginLeft: "20px",
                  background: "orange",
                  color: "white",
                }}
                onClick={handleSubmit}
              >
                MUA NGAY
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail_Product;
