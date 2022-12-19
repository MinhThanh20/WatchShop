import React, { useState } from "react";
import { useEffect } from "react";
import { getAllOrder } from "../../../api/Productequest";
import OrderItem from "../OrderItem/OrderItem";

import { Radio } from "@mantine/core";
import "./OrderPage.scss";
const OrderPage = () => {
  const [listOrders, setListOrders] = useState([]);
  const [value, setValue] = useState("waiting");

  useEffect(() => {
    const fetchAllOrder = async () => {
      const orders = await getAllOrder();
      setListOrders(orders.data);
    };
    fetchAllOrder();
  }, []);
  return (
    <div>
      <Radio.Group value={value} onChange={setValue} withAsterisk>
        <Radio value="waiting" label="Chờ Xác Nhận" />
        <Radio value="accepted" label="Đã Xác Nhận" />
        <Radio value="confirm" label="Đã Nhận Hàng" />
      </Radio.Group>
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
        {value === "waiting" &&
          listOrders.map(
            (order) =>
              order.status === value && (
                <OrderItem
                  order={order}
                  key={order._id}
                  setListOrders={setListOrders}
                />
              )
          )}
        {value === "accepted" &&
          listOrders.map(
            (order) =>
              order.status === value && (
                <OrderItem
                  order={order}
                  key={order._id}
                  setListOrders={setListOrders}
                />
              )
          )}
        {value === "confirm" &&
          listOrders.map(
            (order) =>
              order.status === value && (
                <OrderItem
                  order={order}
                  key={order._id}
                  setListOrders={setListOrders}
                />
              )
          )}
        {/* {listOrders.map((order) => (
          <OrderItem
            order={order}
            key={order._id}
            setListOrders={setListOrders}
          />
        ))} */}
      </table>
    </div>
  );
};

export default OrderPage;
