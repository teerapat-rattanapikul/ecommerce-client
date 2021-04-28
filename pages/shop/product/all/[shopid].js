import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./productlist.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (router.query.shopid) {
      axios({
        url: `http://localhost:8000/api/product/getAll`,
        method: "post",
        data: { shopId: router.query.shopid },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setProducts(res.data);
      });
    }
  }, []);
  const router = useRouter();
  return (
    <div className="container">
      <div className={classes.container__productlist}>
        <button
          onClick={() => {
            router.push(`/shop/product/addProduct/${router.query.shopid}`);
          }}
        >
          +
        </button>
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => {
              router.push(`/shop/product/detail/${product.id}`);
            }}
          >
            {product.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
