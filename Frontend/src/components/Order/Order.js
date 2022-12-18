import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrder } from "../../api/Productequest";
import OrderItem from "../OrderItem/OrderItem";
import "./Order.scss";
import { Table } from "reactstrap";

const Order = () => {
  const user = useSelector((state) => state.authReducer.authData);
  const userId = user.user._id;
  // State
  const [listOrder, setListOrder] = useState([]);
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
      <Table bordered>
        <thead style={{ background: 'rgb(10, 145, 10)', color: 'white', textAlign: 'center', marginTop: '20px' }}>
          <tr >
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng</th>
            <th>Tổng Tiền</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {listOrder.map((order) => (
            <OrderItem
              order={order}
              key={order._id}
              setListOrder={setListOrder}
              userId={userId}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Order;
