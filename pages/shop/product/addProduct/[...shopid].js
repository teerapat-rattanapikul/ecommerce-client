import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./addproduct.module.css";
import jwt_decode from "jwt-decode";
const AddProduct = () => {
  const router = useRouter();
  const { shopid } = router.query;
  const [imageFile, setImageFile] = useState("");
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");
  const [productAdd, setProductAdd] = useState(true);

  if (shopid) {
    const validToken = localStorage.getItem("token");
    if (validToken !== shopid[0]) {
      alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
      router.replace("/login");
    }
  }

  const addProduct = () => {
    var formData = new FormData();
    if (
      imageFile === "" ||
      productName.trim() === "" ||
      productDetail.trim() === "" ||
      price.trim() === "" ||
      amount.trim() === ""
    ) {
      setProductAdd(false);
    } else {
      formData.append("productImage", imageFile);
      formData.append("shopId", shopid[1]);
      formData.append("productName", productName);
      formData.append("productDetail", productDetail);
      formData.append("productPrice", parseInt(price));
      formData.append("productAmount", parseInt(amount));
      axios({
        url: `http://localhost:8000/api/product/addProduct`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        if (res.data === true) {
          router.back();
        }
      });
    }
  };

  const preViewImage = (file) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };
  return (
    <div className="container container  shadow  bg-body rounded">
      <div className={classes.container__addproduct}>
        <div className="input-group mb-3">
          <span className="input-group-text">ชื่อผลิตภัณฑ์</span>
          <input
            type="text"
            className="form-control"
            placeholder="กรุณาพิมพ์ชื่อผลิตภัณฑ์"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">คำอธิบายเพิ่มเติม</span>
          <input
            type="text"
            className="form-control"
            placeholder="กรุณาพิมพ์คำอธิบาย"
            value={productDetail}
            onChange={(e) => {
              setProductDetail(e.target.value);
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">ราคาต่อชิ้น</span>
          <input
            type="text"
            className="form-control"
            placeholder="กรุณาพิมพ์ราคาสินค้า"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <span className="input-group-text">บาท</span>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">จำนวนสินค้าที่จำหน่าย</span>
          <input
            type="text"
            className="form-control"
            placeholder="กรุณาพิมพ์จำนวนสินค้า"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <span className="input-group-text">ชิ้น</span>
        </div>
        <span className="input-group-text">รูปภาพผลิตภัณฑ์</span>
        {image !== "" ? (
          <img className={classes.image__product} src={image} />
        ) : null}
        <div className="input-group mb-3">
          <span className="input-group-text primary">เลือกรูปภาพสินค้า</span>
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              preViewImage(e.target.files[0]);
              setImageFile(e.target.files[0]);
            }}
          />
        </div>

        <button onClick={addProduct} className="btn btn-primary fs-5">
          บันทึก
        </button>
        {!productAdd ? (
          <label className={classes.alert__addproduct + " " + "bg-warning "}>
            กรุณาใส่ข้อมูลให้ครบทุกช่อง
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default AddProduct;
