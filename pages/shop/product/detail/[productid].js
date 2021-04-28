import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./detail.module.css";
import { connect } from "react-redux";
import { currentProduct } from "../../../../redux/actions/product";

const ProductDetail = (props) => {
  const router = useRouter();
  const { productid } = router.query;
  const [product, setProduct] = useState();
  useEffect(() => {
    if (productid) {
      axios({
        url: `http://localhost:8000/api/product/getDetail`,
        method: "post",
        data: { productId: productid },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setProduct(res.data);
        props.currentProduct(res.data);
      });
    }
  }, []);
  if (!product) return null;
  return (
    <div className="container">
      <div className={classes.contianer__productdetail}>
        <label>{product.name}</label>
        <label>{product.detail}</label>
        <label>{product.price}</label>
        <label>{product.amount}</label>
        <img
          className={classes.detail__image}
          src={`http://localhost:8000/${product.image}`}
        />
        <button
          onClick={() => {
            router.push("/shop/product/edit");
          }}
        >
          edit
        </button>
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  product: state.product,
});

const MapDispatchToProps = {
  currentProduct: currentProduct,
};

export default connect(MapStateToProps, MapDispatchToProps)(ProductDetail);
