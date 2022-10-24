import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../../../api/Productequest";
import axios from "axios";

const ProductItem = ({ item, index, setListProduct }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
    number: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  //func
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteProduct(item._id);
    const products = await getAllProduct();
    setListProduct(products.data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
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
    console.log(newProduct);
    await updateProduct(item._id, newProduct);
    setOpenUpdate(false);
  };
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        {openUpdate ? (
          <input type="text" name="name" onChange={handleChange} />
        ) : (
          item.name
        )}
      </td>
      <td>
        {openUpdate ? (
          <input type="file" name="image" onChange={imageChange} />
        ) : (
          item.image
        )}
      </td>
      <td>
        {openUpdate ? (
          <input type="text" name="price" onChange={handleChange} />
        ) : (
          item.price
        )}
      </td>
      <td>
        {openUpdate ? (
          <input type="text" name="category" onChange={handleChange} />
        ) : (
          item.category
        )}
      </td>
      <td>
        {openUpdate ? (
          <input type="number" name="number" onChange={handleChange} />
        ) : (
          item.number
        )}
      </td>
      <td>
        {openUpdate ? (
          <input type="text" name="description" onChange={handleChange} />
        ) : (
          item.description
        )}
      </td>
      <td>
        {openUpdate ? (
          <button onClick={handleUpdate}>Xác nhận</button>
        ) : (
          <button onClick={() => setOpenUpdate(true)}>
            <FontAwesomeIcon icon={faPen} />
          </button>
        )}
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
