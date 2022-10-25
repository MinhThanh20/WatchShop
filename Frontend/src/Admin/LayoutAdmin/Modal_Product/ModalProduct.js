import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Row,
  Col,
} from "reactstrap";

const ModalProduct = ({
  toggle,
  modal,
  handleValue,
  product,
  handleAdd,
  handleClose,
  imageChange,
}) => {
  return (
    <div style={{ marginRight: "50px" }}>
      <Button
        color="primary"
        onClick={toggle}
        style={{ color: "white", fontWeight: "600" }}
      >
        Thêm mới
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader color="primary">Thêm mới sản phẩm</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Label>Tên sản phẩm</Label>
            </Col>
          </Row>
          <input
            value={product.name}
            name="name"
            style={{ width: "100%" }}
            placeholder="Nhập tên sản phẩm"
            onChange={(e) => handleValue(e)}
          />

          <Row>
            <Col>
              <Label>Hình ảnh</Label>
            </Col>
          </Row>

          <input
            value={product.image}
            type="file"
            name="image"
            id="file-upload"
            multiple
            onChange={imageChange}
          />

          <Row>
            <Col>
              <Label>Giá sản phẩm</Label>
            </Col>
          </Row>
          <input
            value={product.price}
            name="price"
            style={{ width: "100%" }}
            placeholder="Nhập giá sản phẩm"
            onChange={(e) => handleValue(e)}
          />
          <Row>
            <Col>
              <Label>Loại sản phẩm</Label>
            </Col>
          </Row>

          <input
            value={product.category}
            name="category"
            style={{ width: "100%" }}
            placeholder="Nhập loại sản phẩm"
            onChange={(e) => handleValue(e)}
          />
          <Row>
            <Col>
              <Label>Số lượng</Label>
            </Col>
          </Row>

          <input
            value={product.number}
            name="number"
            style={{ width: "100%" }}
            placeholder="Nhập số lượng"
            onChange={(e) => handleValue(e)}
          />
          <Row>
            <Col>
              <Label>Mô tả</Label>
            </Col>
          </Row>

          <textarea
            value={product.description}
            name="description"
            style={{ width: "100%" }}
            placeholder="Mô tả sản phẩm "
            onChange={(e) => handleValue(e)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAdd}>
            ADD
          </Button>

          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalProduct;
