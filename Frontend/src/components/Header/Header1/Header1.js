import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Header1/Header1.scss";
import image1 from "../../../Assest/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../action/AuthAction";
import { useEffect } from "react";
import { getAllProduct, getOrder } from "../../../api/Productequest";
function Header1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const userId = user?.user._id;
  const [listOrder, setListOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState();

  //Func
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const result = products.filter((product) => product.name.includes(search));
    console.log(result);
    navigate("/search/results", { state: { result: result } });
  };

  useEffect(() => {
    const getListOrder = async () => {
      const listOrder = await getOrder(userId);
      setListOrder(listOrder.data);
    };
    getListOrder();
  }, [listOrder.length]);
  useEffect(() => {
    const fetchAllProduct = async () => {
      const listProduct = await getAllProduct();
      setProducts(listProduct.data);
    };
    fetchAllProduct();
  }, []);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-white shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              <img style={{ width: "40%" }} src={image1} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <div className="buttons" > */}
              <div className="dropdown">
                <input
                  type="text"
                  placeholder="Tìm kiếm....."
                  style={{
                    borderRadius: "10px",
                    height: "50px",
                    width: '35%',
                    marginLeft: "-150px",
                    // margin: 'auto',
                    border: "1px solid ",

                  }}
                  name="search"
                  value={search}
                  onChange={handleChange}
                />
                <i
                  className="fa fa-search"
                  style={{
                    border: "1px solid",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: '15px',
                    marginRight: '280px',

                  }}
                  onClick={handleSearch}
                ></i>
                {user ? (
                  <>
                    <button
                      className="btn btn-outline-dark ms-2 dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"

                    >
                      <i className="fa fa-user">{" " + user.user.username.substring(0, 5)}</i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                      style={{ left: '342px' }}
                    >
                      {user.user.admin && (
                        <>
                          <NavLink className="dropdown-item" to="/admin/order">
                            <li>Quản lý đơn hàng</li>
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/admin/warehouse"
                          >
                            <li>Quản lý kho hàng</li>
                          </NavLink>
                        </>
                      )}
                      <li>
                        <NavLink
                          className="dropdown-item"
                          onClick={handleLogOut}
                        >
                          Đăng xuất
                        </NavLink>
                      </li>
                    </ul>
                  </>
                ) : (
                  <NavLink className="btn btn-outline-dark" to="/login">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                  </NavLink>
                )}
                <NavLink to="/order" className="btn btn-outline-dark ms-2" >
                  <i className="fa fa-shopping-bag"></i>
                  {/* {listOrder.length !== 0 && (
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  )} */}
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header1;