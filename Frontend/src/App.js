import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Detail_Product from "./components/Detail_Product/Detail_Product";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

// import Layout from "./components/Profile/Layout/Layout";
// import Per_Info from "./components/Profile/Per_Info/Per_Info";
import Category from "./components/Category/Category";
import { useSelector } from "react-redux";
import OrderPage from "./Admin/LayoutAdmin/OrderPage/OrderPage";
import WareHousePage from "./Admin/LayoutAdmin/WareHousePage/WareHousePage";
import Order from "./components/Order/Order";
import SearchReults from "./components/SearchResults/SearchReults";
import User from "./Admin/LayoutAdmin/User/User";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail_Product />} />
        <Route path="/search/results" element={<SearchReults />} />
        <Route
          path="/cart/:id"
          element={user ? <Cart /> : <Navigate to="../login" />}
        />
        <Route
          path="/checkout"
          element={user ? <Checkout /> : <Navigate to="../login" />}
        />
        <Route
          path="/order"
          element={user ? <Order /> : <Navigate to="../login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="../" /> : <Register />}
        />
        <Route path="/category/:category" element={<Category />} />
        <Route
          path="/admin/order"
          element={
            user?.user.admin ? <OrderPage /> : <Navigate to="../login" />
          }
        />
        <Route
          path="/admin/warehouse"
          element={
            user?.user.admin ? <WareHousePage /> : <Navigate to="../login" />
          }
        />
        <Route
          path="/admin/user"
          element={
            user?.user.admin ? <User /> : <Navigate to="../login" />
          }
        />
      </Routes>
      <Footer />
      {/* <BrowserRouter>
        <LayoutAdmin/>
      </BrowserRouter> */}
    </>
  );
}

export default App;
