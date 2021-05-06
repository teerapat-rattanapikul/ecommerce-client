import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./productlist.module.css";
import Loading from "../../../../components/ui/Loading";
import jwt_decode from "jwt-decode";
import back from "../../manage/shopid.module.css";
import { numberWithCommas } from "../../../../helppers/moneyFormat";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  if (loading && router.query.shopid) {
    const decoded = jwt_decode(router.query.shopid[0]);
    const validToken = localStorage.getItem("token");
    if (validToken !== router.query.shopid[0]) {
      console.log(validToken);
      alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
      router.replace("/login");
    }
    axios({
      url: `http://localhost:8000/api/product/merChantGetAll`,
      method: "post",
      data: { shopId: router.query.shopid[1], userId: decoded.user.id },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (!res.data) {
        alert("คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล");
        router.replace("/login");
      } else {
        setProducts(res.data);
        setLoading(false);
      }
    });
  }

  return (
    <div className="container">
      <a
        className={back.back}
        onClick={() => {
          router.back();
        }}
      >
        <h4>{"< ย้อนกลับ"}</h4>
      </a>
      {loading ? (
        <Loading loading={loading} />
      ) : (
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
                    <td>{numberWithCommas(product.price)}</td>
                    <td>{numberWithCommas(product.amount)}</td>
                    {product.status ? (
                      <td className="text-success">วางจำหน่าย</td>
                    ) : (
                      <td className="text-danger">ยังไม่ได้วางจำหน่าย</td>
                    )}

                    <td>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => {
                          router.push(
                            {
                              pathname: `/shop/product/detail/${router.query.shopid[0]}/${router.query.shopid[1]}/${product.id}`,
                            },
                            undefined,
                            { scroll: false }
                          );
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
              router.push(
                {
                  pathname: `/shop/product/addProduct/${router.query.shopid[0]}/${router.query.shopid[1]}`,
                },
                undefined,
                { scroll: false }
              );
            }}
          >
            เพิ่มสินค้าใหม่
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
