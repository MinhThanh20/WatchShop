import React from "react";
import './Layout.scss'
import { NavLink } from "react-router-dom";
function Layout() {
    return (
        <>
            <div id="menu">
                <ul>
                    <li>Danh mục</li>
                    <li>
                        <NavLink to='/layout'>
                            <i className="fa fa-user"></i>
                            Thông tin cá nhân
                        </NavLink>
                    </li>
                    <li><a href="#">
                        <i className="fa fa-history"></i>Lịch sử</a></li>

                </ul>
            </div>
        </>
    )
}
export default Layout