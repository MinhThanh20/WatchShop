import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  acceptOrder,
  getAllOrder,
  getProductbyId,
} from "../../../api/Productequest";
import { getUser } from "../../../api/UserRequest";

const OrderItem = ({ order, setListOrders }) => {
  const [product, setProduct] = useState();
  const [users, setUsers] = useState();
  const [status, setStatus] = useState(order.status);
  const user = useSelector((state) => state.authReducer.authData);
  const userId = user?.user._id;
  //Func
  const handleSubmit = async (e) => {
    e.preventDefault();
    await acceptOrder(order._id, userId);
    setStatus(true);
  };
  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductbyId(order.productId);
      setProduct(product.data);
    };
    getProduct();
  }, [order.productId]);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(order.userId);
      setUsers(user.data);
    };
    fetchUser();
  }, [order.userId]);
  return (
    <tr style={{ textAlign: "center" }}>
      <td>{users?.username}</td>
      <td>{product?.name}</td>
      <td>{order.count}</td>
      <td>{order.totalAmount}</td>
      <td>
        <ul>
          <li>
            <b>Họ Tên:</b> {order.info.name}
          </li>
          <li>
            <b>Địa chỉ:</b> {order.info.address}
          </li>
          <li>
            <b>SĐT:</b> {order.info.phone}
          </li>
          <li>
            <b>Email:</b> {order.info.mail}
          </li>
        </ul>
      </td>
      <td>{order.info.desc}</td>
      <td style={status ? { color: "green" } : { color: "red" }}>
        {status ? "Đã Xác Nhận" : "Chờ Xác Nhận"}
      </td>
      <td>
        <button onClick={handleSubmit} disabled={status ? true : false}>
          Xác Nhận
        </button>
      </td>
    </tr>
  );
};

export default OrderItem;
