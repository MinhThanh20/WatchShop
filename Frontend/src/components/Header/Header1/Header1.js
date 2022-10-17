import React  from "react";
import { NavLink } from "react-router-dom";
import '../Header1/Header1.scss'
import image1 from "../../../Assest/img/logo.png"
import {useSelector} from "react-redux";
function Header1() {
   const user = useSelector((state)=> state.auth.login.currentUser)
    console.log(user);

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light  bg-white shadow-sm">
                    <div className="container" >
                        <NavLink className="navbar-brand fw-bold fs-4" to="/">
                            <img style={{ width: '40%' }} src={image1} />
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

                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >

                            {/* <div className="buttons" > */}
                            <div className="dropdown">
                                <NavLink to="/search" className="btn btn-outline-dark">
                                    <i className="fa fa-search"></i>
                                </NavLink>
                                <button className="btn btn-outline-dark ms-2 dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <i className="fa fa-user"> {user} </i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><NavLink className="dropdown-item" to="/layout">Profile</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/login">Đăng xuất</NavLink></li>

                                </ul>
                                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span class="visually-hidden">New alerts</span>
                                    </span>
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
    )
}
export default Header1;