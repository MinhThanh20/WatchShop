import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Header1/Header1.scss";
import image1 from "../../../Assest/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../action/AuthAction";
import { useEffect } from "react";
import { getOrder } from "../../../api/Productequest";
function Header1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const userId = user?.user._id;
  const [listOrder, setListOrder] = useState([]);
  const [search, setSearch] = useState("");

  //Func
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    return str;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    // const text = search.toUpperCase();
    const text = removeVietnameseTones(search);
    const textSearch = text.toUpperCase();
    console.log(textSearch);
    switch (textSearch) {
      case "DONG HO NU":
        return navigate("/category/female-clock");
      case "DONG HO NAM":
        return navigate("/category/male-clock");
      case "DONG HO DOI":
        return navigate("/category/couple-clock");

      default:
        return "Not Found";
    }
  };

  useEffect(() => {
    const getListOrder = async () => {
      const listOrder = await getOrder(userId);
      setListOrder(listOrder.data);
    };
    getListOrder();
  }, [listOrder.length]);
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
                    borderRadius: "5px",
                    height: "35px",
                    marginRight: "5px",
                    border: "1px solid ",
                  }}
                  name="search"
                  value={search}
                  onChange={handleChange}
                />

                {/* <NavLink to="/search" className="btn btn-outline-dark"> */}
                <i
                  className="fa fa-search"
                  style={{
                    border: "1px solid",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleSearch}
                ></i>
                {/* </NavLink> */}
                {user ? (
                  <>
                    <button
                      className="btn btn-outline-dark ms-2 dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user">{" " + user.user.username}</i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      {/* <li>
                        <NavLink className="dropdown-item" to="/layout">
                          Profile
                        </NavLink>
                      </li> */}
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
                    Đăng Nhập/Đăng Kí
                  </NavLink>
                )}
                <NavLink to="/order" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-bag"></i>
                  {listOrder.length !== 0 && (
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  )}
                </NavLink>
              </div>
              {/* <NavLink to="/login" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-user"></i>
                                </NavLink> */}
              {/* </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header1;