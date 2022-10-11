import React from "react";
import "../Footer/Footer.scss"
import image from "../../Assest/img/logo.png"
function Footer() {
    return (
        <>

            <section id="footer">
                <div className="container">
                    <div className="row text-center text-xs-center text-sm-left text-md-left">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <img style={{width:'80%'}} src={image}/>
                            <ul className="list-unstyled quick-links" style={{display:'flex-box', margin:'1em', }}>
                                <li><a href=""><i className="fa fa-map-marker"></i>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</a></li>
                                <li><a href=""><i className="fa fa-phone"></i>076 922 0162</a></li>
                                <li><a href=""><i className="fa  fa-envelope"></i>demonhunterg@gmail.com</a></li>
                                <li><a href=""><i className="fa fa-money"></i>demonhunterp</a></li>
                     
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Chính sách </h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href=""><i className="fa fa-arrow-right"></i>Chăm sóc khách hàng</a></li>
                                <li><a href=""><i className="fa fa-arrow-right"></i>Bảo hành và đổi trả</a></li>
                                <li><a href=""><i className="fa fa-arrow-right"></i>Bảo mật thông tin </a></li>
                                <li><a href=""><i className="fa fa-arrow-right"></i>Mua hàng trả góp</a></li>
                                <li><a href=""><i className="fa fa-arrow-right"></i>Vận chuyển và thanh toán </a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Về chúng tôi</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href=""><i className="fa fa-arrow-right"></i>Giải thưởng đạt được </a></li>
                                <li><a href=""><i className="fa fa-arrow-right"></i>Tiêu chí bán hàng</a></li>
                                <li><a href=""><i className="fa fa-arrow-right"></i>Đối tác chiến lược</a></li>
                                <li><a href=""><i className="fa fa-arrow-right"></i>Đánh giá của khách hàng</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href=""><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fa fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href=""><i className="fa fa-google-plus"></i></a></li>
                                <li className="list-inline-item"><a href="" target="_blank"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                  
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p>Copyright @ Vietnam Watchshop 2019</p>
                    </div>
              
            </div>
        </div>
	</section >
            
        </>
    )
}
export default Footer