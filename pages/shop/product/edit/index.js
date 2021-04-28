import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const EditProduct = (props) => {
  const router = useRouter();
  const [image, setImage] = useState(props.product.product.image);
  const [imageFile, setImageFile] = useState("");
  const [productName, setProductName] = useState(props.product.product.name);
  const [productDetail, setProductDetail] = useState(
    props.product.product.detail
  );
  const [price, setPrice] = useState(props.product.product.price);
  const [amount, setAmount] = useState(props.product.product.amount);
  const [productAdd, setProductAdd] = useState(true);
  const [updateImage, setUpdateImage] = useState(false);

  useEffect(() => {
    console.log(productName, productDetail, price, amount, imageFile);
  }, []);
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
      formData.append("productId", props.product.product.id);
      formData.append("productName", productName);
      formData.append("productDetail", productDetail);
      formData.append("productPrice", parseInt(price));
      formData.append("productAmount", parseInt(amount));
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

  return (
    <div className="container">
      this is edit product
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
            setUpdateImage(true);
            setImageFile(e.target.files[0]);
          }}
        />
        <button onClick={editProduct}>save</button>
        {!productAdd ? <div>Please type all input</div> : null}
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  product: state.product,
});

export default connect(MapStateToProps)(EditProduct);
