import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../../api/Productequest";
import ModalProduct from "../Modal_Product/ModalProduct";
import axios from "axios";
// import ListProduct from "../ListProduct/ListProduct";
import { Table } from "reactstrap";
import ProductItem from "../ProductItem/ProductItem";

const WareHousePage = () => {
  //State
  const [modal, setModal] = useState(false);
  const [checkEdit, setCheckEdit] = useState(false);
  const [check, setCheck] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    number: "",
    description: "",
  });
  const [listProduct, setListProduct] = useState([]);
  const [image, setImage] = useState(null);
  const [key, setKey] = useState('')
  //Func
  const toggle = () => setModal(!modal);

  const handleValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
    setKey(e.target.value)

  };

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    const newProduct = product;
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newProduct.image = filename;
      try {
        axios.post("http://localhost:8000/upload/", data);
      } catch (error) {
        console.log(error);
      }
    }
    axios
      .post("http://localhost:8000/product/", newProduct)
      .then((res) => {
        setProduct({
          name: "",
          price: "",
          category: "",
          number: "",
          description: "",
        });
        setCheckEdit(!checkEdit);
        toggle();
      })
      .catch((err) => console.log(err));
    const products = await getAllProduct();
    setListProduct(products.data);
  };

  const handleClose = () => {
    setProduct({
      name: "",
      price: "",
      category: "",
      number: "",
      description: "",
    });
    toggle();
  };

  useEffect(() => {
    const fetchAllProduct = async () => {
      const products = await getAllProduct();
      setListProduct(products.data);
    };
    fetchAllProduct();
  }, [listProduct.length]);
  console.log(listProduct.length);
  const listTask = listProduct.filter((item) => item.name.toLowerCase().indexOf(key) !== -1)

  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div className="box">
              <div className="container-1">
                <input type="search" id="search" placeholder="Search..."
                  onChange={handleValue}
                />
              </div>
            </div>
          </div>
          <div class="col">
            <ModalProduct
              toggle={toggle}
              modal={modal}
              handleValue={handleValue}
              handleAdd={handleAdd}
              product={product}
              handleClose={handleClose}
              imageChange={imageChange}
            />
          </div>

        </div>
      </div>

      <Table bordered>
        <thead
          style={{
            background: "rgb(10, 145, 10)",
            color: "white",
            textAlign: "center",
          }}
        >
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá sản phẩm</th>
            <th>Loại sản phẩm</th>

            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listTask.map((item, index) => (
            <ProductItem
              item={item}
              index={index}
              setListProduct={setListProduct}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default WareHousePage;
