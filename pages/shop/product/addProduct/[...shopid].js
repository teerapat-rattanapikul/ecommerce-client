import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./addproduct.module.css";
import back from "../../manage/shopid.module.css";

const style = {
  forDeiv: "input-group mb-3 d-flex justify-content-center",
  forSpan: "input-group-text d-inline-block text-truncate",
};

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
    <div className="container ">
      <a
        className={back.back}
        onClick={() => {
          router.back();
        }}
      >
        <h4>{"< ย้อนกลับ"}</h4>
      </a>
      <div className={classes.container__addproduct}>
        <div className={classes.subContainer__addproduct}>
          <span className={"mb-5 h2"}>เพื่มสินค้า</span>
          <div className={style.forDeiv}>
            <span className={style.forSpan}>ชื่อสินค้า</span>
            <input
              type="text"
              className="form-control"
              placeholder="กรุณาพิมพ์ชื่อสินค้า"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>
          <div className={style.forDeiv}>
            <span className={style.forSpan}>คำอธิบายเพิ่มเติม</span>
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
          <div className={style.forDeiv}>
            <span className={style.forSpan}>ราคาต่อชิ้น</span>
            <input
              type="text"
              className="form-control"
              placeholder="กรุณาพิมพ์ราคาสินค้า"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <span className={style.forSpan}>บาท</span>
          </div>
          <div className={style.forDeiv}>
            <span className={style.forSpan}>จำนวนสินค้าที่จำหน่าย</span>
            <input
              type="text"
              className="form-control"
              placeholder="กรุณาพิมพ์จำนวนสินค้า"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <span className={style.forSpan}>ชิ้น</span>
          </div>
          <span className={style.forSpan + " " + "w-100"}>รูปภาพสินค้า</span>
          {image !== "" ? (
            <img className={classes.image__product} src={image} />
          ) : (
            <img className={classes.image__product} src="/no-image.jpeg" />
          )}
          <div className={style.forDeiv}>
            {/* <span className={style.forSpan}>เลือกรูปภาพสินค้า</span> */}
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                preViewImage(e.target.files[0]);
                setImageFile(e.target.files[0]);
              }}
            />
          </div>

          <button onClick={addProduct} className="btn btn-primary fs-5 w-100">
            บันทึก
          </button>
          {!productAdd ? (
            <label className={classes.alert__addproduct + " " + "bg-warning "}>
              กรุณาใส่ข้อมูลให้ครบทุกช่อง
            </label>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
