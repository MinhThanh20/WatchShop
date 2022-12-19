import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrder } from "../../api/Productequest";
import OrderItem from "../OrderItem/OrderItem";
import { Radio } from "@mantine/core";
import "./Order.scss";

const Order = () => {
  const user = useSelector((state) => state.authReducer.authData);
  const userId = user.user._id;
  // State
  const [listOrder, setListOrder] = useState([]);
  const [value, setValue] = useState("waiting");

  useEffect(() => {
    const getListOrder = async () => {
      const listOrder = await getOrder(userId);
      setListOrder(listOrder.data);
    };
    getListOrder();
  }, [listOrder.length]);
  if (listOrder.length === 0) {
    return <div className="order-none">Bạn chưa có đơn hàng nào</div>;
  }
  return (
    <div>
      <Radio.Group value={value} onChange={setValue} withAsterisk>
        <Radio value="waiting" label="Chờ Xác Nhận" />
        <Radio value="accepted" label="Đã Xác Nhận" />
        <Radio value="confirm" label="Đã Nhận Hàng" />
      </Radio.Group>
      <table style={{ width: "100%" }}>
        <tr style={{ textAlign: "center" }}>
          <th>Tên Sản Phẩm</th>
          <th>Số Lượng</th>
          <th>Tổng Tiền</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
        {value === "waiting" &&
          listOrder.map(
            (order) =>
              order.status === value && (
                <OrderItem
                  order={order}
                  key={order._id}
                  setListOrder={setListOrder}
                  userId={userId}
                />
              )
          )}
        {value === "accepted" &&
          listOrder.map(
            (order) =>
              order.status === value && (
                <OrderItem
                  order={order}
                  key={order._id}
                  setListOrder={setListOrder}
                  userId={userId}
                />
              )
          )}
        {value === "confirm" &&
          listOrder.map(
            (order) =>
              order.status === value && (
                <OrderItem
                  order={order}
                  key={order._id}
                  setListOrder={setListOrder}
                  userId={userId}
                />
              )
          )}
      </table>
    </div>
  );
};

export default Order;
