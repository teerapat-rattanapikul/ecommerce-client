import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Loading from "../../../components/ui/Loading";
import classes from "./order.module.css";
import { useRouter } from "next/router";
import OrderComponent from "../../../components/ui/Order";
import jwt_decode from "jwt-decode";
import { numberWithCommas } from "../../../helppers/moneyFormat";
import back from "../manage/shopid.module.css";
const Order = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    try {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.user.id !== props.data.userId) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      } else {
        setUserRole(props.data.role);
        setOrderList(props.data.shop.orders);
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      }
    }
  }, []);
  // if (router.query.id && loading) {
  //   const decoded = jwt_decode(router.query.id[0]);
  //   const validToken = localStorage.getItem("token");
  //   if (validToken !== router.query.id[0]) {
  //     alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
  //     router.replace("/login");
  //   }
  //   axios({
  //     url: `http://localhost:8000/api/order/getByShopId`,
  //     method: "post",
  //     data: { shopId: router.query.id[1], userId: decoded.user.id },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {

  //   });
  //   setLoading(false);
  // }
  const changeStatus = (orderId, status) => {
    const decoded = jwt_decode(router.query.id[0]);
    axios({
      url: `http://localhost:8000/api/order/updateStatus`,
      method: "post",
      data: { orderId: orderId, status: status, staffId: decoded.user.id },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const orderIndex = orderList.findIndex((order) => order.id === orderId);
      orderList[orderIndex].status = status;
      setOrderList([...orderList]);
    });
  };

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
        <div className={classes.container__order}>
          <Fragment>
            {orderList.length === 0 ? (
              <div className={classes.empty__order}>
                <img src="/empty-cart.png" height={120} width={120} />
                <p>ไม่มีคำสั่งซื้อจากลูกค้า</p>
              </div>
            ) : (
              <Fragment>
                <table className="table table-striped text-center ">
                  <thead>
                    <tr>
                      <th scope="col">ชื่อสินค้า</th>
                      <th scope="col">รูปภาพสินค้า</th>
                      <th scope="col">จำนวนชิ้นที่สั่ง</th>
                      <th scope="col">ราคารวมทั้งหมด</th>
                      <th scope="col">สถานะสินค้า</th>
                      {userRole === "admin" ? null : (
                        <th scope="col">การจัดการ</th>
                      )}
                    </tr>
                  </thead>
                  <tbody className={"align-middle "}>
                    {orderList.map((order) => (
                      <OrderComponent
                        key={order.id}
                        id={order.id}
                        productName={order.product.name}
                        image={order.product.image}
                        totalAmount={numberWithCommas(order.totalAmount)}
                        totalPrice={numberWithCommas(order.totalPrice)}
                        status={order.status}
                        userRole={userRole}
                        changeStatus={changeStatus}
                      />
                    ))}
                  </tbody>
                </table>
              </Fragment>
            )}
          </Fragment>
        </div>
      )}
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const data = await axios({
    url: `http://localhost:8000/api/order/getByShopId`,
    method: "post",
    data: { shopId: id[1] },
    headers: {
      "Content-Type": "application/json",
      Authorization: id[0],
    },
  });
  console.log(data.data);
  return {
    props: { data: data.data },
  };
};
export default Order;
