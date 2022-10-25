import React, { useEffect } from "react";
import { useState } from "react";
import { getProductbyId } from "../../api/Productequest";
import "./ResultsItem.css";

const ResultsItem = ({ result }) => {
  const severPublic = "http://localhost:8000/images/";
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductbyId(result._id);
      setProduct(product.data);
    };
    fetchProduct();
  }, []);
  console.log(product);
  return (
    <div className="item">
      <div className="item-name">{product?.name}</div>
      <img
        className="item-image"
        src={product?.image ? severPublic + product.image : ""}
        alt=""
      />
      <div className="item-price">
        <b>{product?.price} VNĐ</b>
      </div>
      <button className="detail-button">Chi tiết</button>
    </div>
  );
};

export default ResultsItem;
