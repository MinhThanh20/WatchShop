import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  confirmOrder,
  deleteOrder,
  getOrder,
  getProductbyId,
} from "../../api/Productequest";
import "./OrderItem.css";

const OrderItem = ({ order, setListOrder, userId }) => {
  const [product, setProduct] = useState();

  //Func
  const handleCancel = async (e) => {
    e.preventDefault();
    await deleteOrder(order._id);
    const listOrder = await getOrder(userId);
    setListOrder(listOrder.data);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    await confirmOrder(order._id, userId);
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
      <td
        style={
          order.status === "waiting" ? { color: "red" } : { color: "green" }
        }
      >
        {order.status === "accepted" && "Đã Xác Nhận"}
        {order.status === "waiting" && "Chờ Xác Nhận"}
        {order.status === "confirm" && "Đã Nhận Hàng"}
      </td>
      <td>
        <button
          onClick={handleConfirm}
          disabled={order.status === "accepted" ? false : true}
        >
          Đã nhận hàng
        </button>
      </td>
      <td>
        <button
          onClick={handleCancel}
          disabled={order.status === "confirm" ? true : false}
        >
          Huỷ
        </button>
      </td>
    </tr>
  );
};

export default OrderItem;
