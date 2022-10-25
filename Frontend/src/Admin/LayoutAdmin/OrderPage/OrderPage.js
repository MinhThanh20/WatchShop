import React, { useState } from "react";
import { useEffect } from "react";
import { getAllOrder } from "../../../api/Productequest";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderPage.scss";
const OrderPage = () => {
  const [listOrders, setListOrders] = useState([]);
  useEffect(() => {
    const fetchAllOrder = async () => {
      const orders = await getAllOrder();
      setListOrders(orders.data);
    };
    fetchAllOrder();
  }, []);
  return (
    <div>
      <table style={{ width: "100%" }}>
        <tr style={{ textAlign: "center" }}>
          <th>Người dùng</th>
          <th>Tên Sản Phẩm</th>
          <th>Số Lượng</th>
          <th>Tổng Tiền</th>
          <th>Thông Tin</th>
          <th>Ghi chú</th>
          <th>Trạng thái</th>
          <th></th>
        </tr>

        {listOrders.map((order) => (
          <OrderItem
            order={order}
            key={order._id}
            setListOrders={setListOrders}
          />
        ))}
      </table>
    </div>
  );
};

export default OrderPage;
