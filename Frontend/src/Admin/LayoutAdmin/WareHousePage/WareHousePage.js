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
  };
  const handleSearch = (e) => {
    setKey(e.target.value)
  }

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:8000/product/')
      .then(res => {
        setListProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [checkEdit])

  const handleAdd = (event) => {
    event.preventDefault()
    const newProduct = product
    if (image) {
      const data = new FormData()
      const filename = Date.now() + image.name
      data.append('name', filename)
      data.append('file', image)
      newProduct.image = filename
      try {
        axios.post('http://localhost:8000/upload/', data)
      } catch (error) {
        console.log(error)
      }
    }
    axios.post('http://localhost:8000/product/', newProduct)
      .then(res => {
        setProduct({
          name: '',
          price: '',
          category: '',
          number: '',
          description: '',
        })
        setCheckEdit(true)
        toggle()
      })
      .catch(err => console.log(err))
  }

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


  const listTask = listProduct.filter((item) => item.name.toLowerCase().indexOf(key) !== -1)

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="box">
              <div className="container-1">
                <input type="search" id="search" placeholder="Search..."
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
          <div className="col">
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
              listProduct={listProduct}
              setCheckEdit={setCheckEdit}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default WareHousePage;
