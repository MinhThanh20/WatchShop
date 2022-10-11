import React from "react";
import image from "../../Assest/img/dhnam1.jpg"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Cart() {
    const location = useLocation();
    const state = location.state;
    return (
        <>
            <div className="px-4 my-5 bg-light rounded-3" >
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <img src = {image} height="200px" width="180px" />
                        </div>
                        <div className="col-md-3">
                            <h5>Đồng hồ Nam</h5>
                            <p className="lead fw-bold">18,540,000 đ</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Số Lượng</h5>
                            <p className="lead fw-bold">{state}</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Tổng</h5>
                            <p className="lead fw-bold">18,540,000 đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <Link to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Thanh Toán</Link>
                </div>
            </div>
        </>
    )
}
export default Cart