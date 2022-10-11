import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail_Product from './components/Detail_Product/Detail_Product'
import Home from "./components/Home/Home"
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LayoutAdmin from './Admin/LayoutAdmin/LayoutAdmin';
import Layout from './components/Profile/Layout/Layout';
import Per_Info from './components/Profile/Per_Info/Per_Info';
import Category from './components/Category/Category';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path = "/" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail_Product />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path='/layout' element={<Layout/>}>
              <Route index element={<Per_Info/>}/>
            </Route>
          

          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <BrowserRouter>
        <LayoutAdmin/>
      </BrowserRouter> */}
    </>
  );
}

export default App;
