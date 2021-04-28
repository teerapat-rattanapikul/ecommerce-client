import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const AddProduct = () => {
  const router = useRouter();
  const [imageFile, setImageFile] = useState("");
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [productAdd, setProductAdd] = useState(true);

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
      formData.append("shopId", router.query.shopid);
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

  return (
    <div className="container">
      This is add product page
      <div>
        <label>Product Name: </label>
        <input
          type="text"
          value={productName}
          placeholder="type product name"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <label>Product Detail: </label>
        <input
          type="text"
          value={productDetail}
          placeholder="type product detail"
          onChange={(e) => {
            setProductDetail(e.target.value);
          }}
        />
        <label>Price: </label>
        <input
          type="text"
          value={price}
          placeholder="type price of product"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label>Amount</label>
        <input
          type="text"
          value={amount}
          placeholder="type amont of product"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImageFile(e.target.files[0]);
          }}
        />
        <button onClick={addProduct}>save</button>
        {!productAdd ? <div>Please type all input</div> : null}
      </div>
    </div>
  );
};

export default AddProduct;
