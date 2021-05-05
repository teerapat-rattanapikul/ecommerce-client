import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "../../../../components/ui/Loading";
import classes from "./edit.module.css";
import jwt_decode from "jwt-decode";
const EditProduct = (props) => {
  const router = useRouter();
  const { productid } = router.query;
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productStatus, setProductStatus] = useState(true);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [productAdd, setProductAdd] = useState(true);
  const [updateImage, setUpdateImage] = useState(false);

  if (productid && loading) {
    const decoded = jwt_decode(productid[0]);
    const validToken = localStorage.getItem("token");
    if (validToken !== productid[0]) {
      alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
      router.replace("/login");
    }
    axios({
      url: `http://localhost:8000/api/product/getDetail`,
      method: "post",
      data: {
        productId: productid[2],
        shopId: productid[1],
        userId: decoded.user.id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.data) {
        alert("คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล");
        router.replace("/login");
      } else {
        setProductId(res.data.id);
        setPreviewImage(`http://localhost:8000/${res.data.image}`);
        setProductName(res.data.name);
        setProductDetail(res.data.detail);
        setProductStatus(res.data.status);
        setPrice(res.data.price);
        setAmount(res.data.amount);
        setImage(res.data.image);
        setLoading(false);
      }
    });
  }

  const editProduct = () => {
    var formData = new FormData();
    if (
      productName.trim() === "" ||
      productDetail.trim() === "" ||
      price === 0 ||
      amount === 0
    ) {
      setProductAdd(false);
    } else {
      if (updateImage) {
        formData.append("productImage", imageFile);
      } else {
      }
      formData.append("image", image);
      formData.append("productId", productId);
      formData.append("productName", productName);
      formData.append("productDetail", productDetail);
      formData.append("productPrice", parseInt(price));
      formData.append("productAmount", parseInt(amount));
      formData.append("productStatus", productStatus);
      axios({
        url: `http://localhost:8000/api/product/updateProduct`,
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        if (res.data) {
          router.back();
        }
      });
    }
  };

  const preViewImage = (file) => {
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
  };

  return (
    <div className="container">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className={classes.contianer__edit}>
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
          <div className="input-group mb-3">
            <span className="input-group-text">สถานะสินค้า</span>
            <div
              className={
                classes.checkbok__edit + " " + "form-check form-switch"
              }
            >
              <input
                className={"form-check-input"}
                type="checkbox"
                style={{ height: "30px", width: "70px", margin: "0 20px" }}
                checked={productStatus}
                onChange={() => {
                  setProductStatus(!productStatus);
                }}
              />
              <label className="form-check-label">
                {productStatus ? "วางจำหน่ายสินค้า" : "ยังไม่ได้วางจำหน่าย"}
              </label>
            </div>
          </div>
          <span className="input-group-text">รูปภาพผลิตภัณฑ์</span>
          <img className={classes.image__edit} src={previewImage} />
          <div className="input-group mb-3 mt-3">
            <span className="input-group-text primary">เลือกรูปภาพสินค้า</span>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                setUpdateImage(true);
                preViewImage(e.target.files[0]);
                setImageFile(e.target.files[0]);
              }}
            />
          </div>

          <button onClick={editProduct} className="btn btn-primary fs-5">
            บันทึกการแก้ไข
          </button>

          <div>
            {!productAdd ? (
              <label
                className={classes.alert__addproduct + " " + "bg-warning "}
              >
                กรุณาใส่ข้อมูลให้ครบทุกช่อง
              </label>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
