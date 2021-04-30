import axios from "axios";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import classes from "./productlist.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (router.query.shopid) {
      axios({
        url: `http://localhost:8000/api/product/merChantGetAll`,
        method: "post",
        data: { shopId: router.query.shopid },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
    }
  }, []);

  const updateStatusProduct = () => {};

  const router = useRouter();
  return (
    <div className="container container  shadow  bg-body rounded">
      <div className={classes.container__productlist}>
        {products.length === 0 ? (
          <div className={classes.empty__productList}>
            <img src="/emptyProduct.svg" height={120} width={120} />
            <span>ไม่มีสินผลิตภัณฑ์ในคลังสินค้า</span>
          </div>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ชื่อสินค้า</th>
                <th scope="col">ราคา</th>
                <th scope="col">จำนวนชิ้นที่เหลือ</th>
                <th scope="col">สถานะ</th>
                <th scope="col">การจัดการ</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.amount}</td>
                  {product.status ? (
                    <td className="text-success">วางจำหน่าย</td>
                  ) : (
                    <td className="text-danger">ยังไม่ได้วางจำหน่าย</td>
                  )}

                  <td>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => {
                        router.push(`/shop/product/detail/${product.id}`);
                      }}
                    >
                      ดูรายละเอียด
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button
          className={
            "btn btn-outline-secondary" + " " + classes.button__productList
          }
          onClick={() => {
            router.push(`/shop/product/addProduct/${router.query.shopid}`);
          }}
        >
          เพิ่มสินค้าใหม่
        </button>
      </div>
    </div>
  );
};

export default ProductList;
