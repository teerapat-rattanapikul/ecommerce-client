import axios from "axios";
import { Fragment, useState } from "react";
import Image from "next/image";
import Loading from "../../../components/ui/Loading";
import classes from "./order.module.css";
import { useRouter } from "next/router";
import OrderComponent from "../../../components/ui/Order";
import jwt_decode from "jwt-decode";
const Order = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);
  const [orderStatus, setOrderStatus] = useState("");
  const [updateStatus, setUpdateStatus] = useState(false);
  const [userRole, setUserRole] = useState("");

  if (router.query.id && loading) {
    const decoded = jwt_decode(router.query.id[0]);
    const validToken = localStorage.getItem("token");
    if (validToken !== router.query.id[0]) {
      alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
      router.replace("/login");
    }
    axios({
      url: `http://localhost:8000/api/order/getByShopId`,
      method: "post",
      data: { shopId: router.query.id[1], userId: decoded.user.id },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setUserRole(res.data.role);
      setOrderList(res.data.shop.orders);
    });
    setLoading(false);
  }
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
      console.log(res);
      const orderIndex = orderList.findIndex((order) => order.id === orderId);
      orderList[orderIndex].status = status;
      setOrderList([...orderList]);
    });
  };
  return (
    <div className="container container  shadow  bg-body rounded">
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
                        totalAmount={order.totalAmount}
                        totalPrice={order.totalPrice}
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

export default Order;
