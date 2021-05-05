import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./detail.module.css";
import Loading from "../../../../components/ui/Loading";
import jwt_decode from "jwt-decode";
const styles = "input-group-text fw-normal mb-2 d-inline-block text-truncate";
const ProductDetail = (props) => {
  const router = useRouter();
  const { productid } = router.query;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  if (productid && loading) {
    const decoded = jwt_decode(productid[0]);
    const validToken = localStorage.getItem("token");
    if (validToken !== router.query.productid[0]) {
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
      console.log(res.data);
      if (!res.data) {
        alert("คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล");
        router.replace("/login");
      } else {
        setProduct(res.data);
        setLoading(false);
      }
    });
  }

  return (
    <div className="container container  shadow  bg-body rounded">
      {loading ? (
        <Loading loading={loading} />
      ) : (
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
              {product.price} บาท
            </label>
            <label className={classes.detail__text}>
              <span className={styles}>จำนวนชิ้น</span> {product.amount} ชิ้น
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
                router.push(
                  {
                    pathname: `/shop/product/edit/${productid[0]}/${productid[1]}/${productid[2]}`,
                  },
                  undefined,
                  {
                    scroll: false,
                  }
                );
              }}
              className="btn btn-secondary"
            >
              edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
