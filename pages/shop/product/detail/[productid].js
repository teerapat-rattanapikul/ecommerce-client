import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./detail.module.css";
import { connect } from "react-redux";
import { currentProduct } from "../../../../redux/actions/product";
import { Fragment } from "react";
const styles = "input-group-text fw-normal mb-2 d-inline-block text-truncate";
const ProductDetail = (props) => {
  const router = useRouter();
  const { productid } = router.query;
  const [product, setProduct] = useState();
  useEffect(() => {
    window.scrollTo(0, 250);
    if (productid) {
      axios({
        url: `http://localhost:8000/api/product/getDetail`,
        method: "post",
        data: { productId: productid },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.data);
        setProduct(res.data);
        props.currentProduct(res.data);
      });
    }
  }, []);
  if (!product) return null;
  return (
    <div className="container container  shadow  bg-body rounded">
      <div className={classes.contianer__productdetail}>
        <img
          className={classes.detail__image}
          src={`http://localhost:8000/${product.image}`}
        />
        <div className={classes.detail__content}>
          <label className={classes.detail__text}>
            <span className={styles}>ชื่อผลิตภัณฑ์</span>
            {product.name}
          </label>
          <label className={classes.detail__text}>
            <span className={styles}>รายละเอียดสินค้า</span>
            {product.detail}
          </label>
          <label className={classes.detail__text}>
            <span className={styles}>ราคาต่อชิ้น</span>
            {product.price}
          </label>
          <label className={classes.detail__text}>
            <span className={styles}>จำนวนชิ้น</span> {product.amount}
          </label>
          <label className={classes.detail__text}>
            <span className={styles} style={{ maxWidth: "200px" }}>
              สถานะผลิตภัณฑ์
            </span>
            {product.status ? (
              <label className="text-success">วางจำหน่าย</label>
            ) : (
              <label className="text-danger">ยังไม่ได้วางจำหน่าย</label>
            )}
          </label>

          <button
            onClick={() => {
              router.push("/shop/product/edit");
            }}
            className="btn btn-secondary"
          >
            edit
          </button>
        </div>
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
