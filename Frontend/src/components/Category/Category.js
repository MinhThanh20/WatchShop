import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
function Category() {
  const params = useParams();
  const severPublic = "http://localhost:8000/images/";
  let category = params.category;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/product/category/${category}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, [category]);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        {product.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product._id}>
                  <img
                    src={product.image ? severPublic + product.image : ""}
                    class="card-img-top"
                    height="240px"
                  />
                  <div class="card-body">
                    <h8 class="card-title mb-0">{product.name}</h8>
                    <p class="card-text lead fw-bold">{product.price} đ</p>
                    <Link
                      to={`../detail/${product._id}`}
                      class="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container my-5 py-5">
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
