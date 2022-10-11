import React from "react";
import {Link } from "react-router-dom";
function Header2() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto " style={{marginLeft:'330px'}}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" to={`../category/male-clock`}>
                                ĐỒNG HỒ NAM
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" to={`../category/female-clock`}>
                                ĐỒNG HỒ NỮ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" to={`../category/couple-clock`}>
                                ĐỒNG HỒ ĐÔI
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" to={`../category/assessory`}>
                                PHỤ KIỆN 
                            </Link>
                        </li>
                    </ul>
                    {/* <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
            
        </nav>
        
    )
}
export default Header2