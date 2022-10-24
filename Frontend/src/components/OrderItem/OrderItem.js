import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { deleteOrder, getOrder, getProductbyId } from "../../api/Productequest";
import "./OrderItem.css";

const OrderItem = ({ order, setListOrder, userId }) => {
  const [product, setProduct] = useState();

  //Func
  const handleSubmit = async (e) => {
    e.preventDefault();
    await deleteOrder(order._id);
    const listOrder = await getOrder(userId);
    setListOrder(listOrder.data);
  };

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductbyId(order.productId);
      setProduct(product.data);
    };
    getProduct();
  }, [order.productId]);
  return (
    <tr style={{ textAlign: "center" }}>
      <td className="order-name">{product?.name}</td>
      <td className="order-count">{order.count}</td>
      <td className="odder-totalAmount">{order.totalAmount} VNĐ</td>
      <td style={order.status ? { color: "green" } : { color: "red" }}>
        {order.status ? "Đã xác nhận" : "Chờ xác nhận"}
      </td>
      <td>
        <button onClick={handleSubmit} disabled={order.status ? false : true}>
          Đã nhận hàng
        </button>
      </td>
    </tr>
  );
};

export default OrderItem;
