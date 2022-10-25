import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductbyId, orderProduct } from "../../api/Productequest";
function Checkout() {
  const user = useSelector((state) => state.authReducer.authData);
  const location = useLocation();
  const totalPrice = location.state.totalPrice;
  const id = location.state.id;
  const count = location.state.count;
  const price = location.state.price;
  const navigate = useNavigate();

  //state
  const [product, setProduct] = useState({});
  const [info, setInfo] = useState({
    name: "",
    address: "",
    phone: "",
    mail: "",
    desc: "",
  });

  //Func
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      userId: user.user._id,
      count: count,
      totalAmount: totalPrice,
      info: info,
    };
    await orderProduct(id, formData);
    navigate("/order");
  };

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductbyId(id);
      setProduct(product.data);
    };
    getProduct();
  }, [id]);
  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">1</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Sản phẩm</h6>
                </div>
                <span className="text-muted">Tổng</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span style={{ maxWidth: "250px" }}>{product.name}</span>
                <strong>{price} VNĐ</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Số lượng</span>
                <strong>{count}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Giao hàng</span>
                <p>Giao hàng miễn phí</p>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tổng</span>
                <strong>{totalPrice} VNĐ</strong>
              </li>
            </ul>

            <form className="card p-2">
              <h4 className="mb-3">Thanh toán</h4>

              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  checked=""
                  required=""
                />
                <label className="form-check-label" htmlFor="credit">
                  Chuyển khoản
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" htmlFor="debit">
                  Thanh toán khi nhận hàng
                </label>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Thông tin thanh toán</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="firstName" className="form-label">
                    Họ Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="name"
                    placeholder=""
                    value={info.name}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={info.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Số điện thoại <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    name="phone"
                    value={info.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Địa chỉ email <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mail"
                    value={info.mail}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Ghi chú <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className=" form-control"
                    style={{ height: "150px", marginBottom: "30px" }}
                    name="desc"
                    value={info.desc}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                className="w-50 btn btn-primary btn-lg"
                type="submit"
                onClick={handleSubmit}
              >
                Đặt hàng
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;
