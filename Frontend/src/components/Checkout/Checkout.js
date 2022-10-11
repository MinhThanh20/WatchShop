import React from "react";
function checkout() {
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
                                <span>Đồng hồ nam</span>
                                <strong>18,540,000 VNĐ</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Giao hàng</span>
                                <p>Giao hàng miễn phí</p>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng</span>
                                <strong>18,540,000 VNĐ</strong>
                            </li>


                        </ul>

                        <form className="card p-2">
                        <h4 className="mb-3">Thanh toán</h4>

                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                <label className="form-check-label" htmlFor="credit">Chuyển khoản</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                <label className="form-check-label" htmlFor="debit">Thanh toán khi nhận hàng</label>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Thông tin thanh toán</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="firstName" className="form-label">Họ Tên </label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />

                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Địa chỉ</label>
                                    <input type="text" className="form-control" id="address" required="" />

                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Số điện thoại <span className="text-muted"></span></label>
                                    <input type="text" className="form-control" id="address2" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Địa chỉ email  <span className="text-muted"></span></label>
                                    <input type="text" className="form-control"  />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Ghi chú  <span className="text-muted"></span></label>
                                    <input type="text" className=" form-control" style={{height:'150px', marginBottom:'30px'}} />
                                </div>
                            </div>
                           
                            <button className="w-50 btn btn-primary btn-lg" type="submit">Đặt hàng </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}
export default checkout