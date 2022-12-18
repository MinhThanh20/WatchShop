import React, { useState } from "react";
import { useEffect } from "react";
import { getAllOrder } from "../../../api/Productequest";
import OrderItem from "../OrderItem/OrderItem";
import "./OrderPage.scss";
import { Table } from "reactstrap";
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
      <Table bordered>
        <thead style={{ background: 'rgb(10, 145, 10)', color: 'white', textAlign: 'center', marginTop: '20px' }}>
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
        </thead>
        <tbody>

          {listOrders.map((order) => (
            <OrderItem
              order={order}
              key={order._id}
              setListOrders={setListOrders}
            />
          ))}
        </tbody>

      </Table >
    </div>
  );
};

export default OrderPage;
