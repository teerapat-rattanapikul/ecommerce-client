import classes from "./log.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import Loading from "../../../components/ui/Loading";
import jwt_decode from "jwt-decode";
import back from "../manage/shopid.module.css";
import { translateStatus } from "../../../helppers/transletStatus";
const log = (props) => {
  const [userLog, setUserLog] = useState([]);
  const [userLogSelect, setUserLogSelect] = useState(true);
  const [orderDetailLog, setOrderDetailLog] = useState([]);
  const [orderLogSelect, setOrderLogSelect] = useState(true);
  const [productLog, setProductLog] = useState("");
  const [orderLog, setOrderLog] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    try {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.user.id !== props.staff.merchant) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      } else {
        setUserLog(props.staff.staff);
        setOrderLog(props.order);
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      }
    }
  }, []);
  // if (loading && shopid) {
  //   const decoded = jwt_decode(shopid[0]);
  //   const validToken = localStorage.getItem("token");
  //   if (validToken !== shopid[0]) {
  //     alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
  //     router.replace("/login");
  //   }
  //   axios({
  //     url: `http://localhost:8000/api/user/log`,
  //     method: "post",
  //     data: { shopId: shopid[1], userId: decoded.user.id },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     if (!res.data) {
  //       alert("คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล");
  //       router.replace("/login");
  //     } else {
  //       setUserLog(res.data);
  //       axios({
  //         url: `http://localhost:8000/api/order/merChantGetOrder`,
  //         method: "post",
  //         data: { shopId: shopid },
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }).then((res) => {
  //         setOrderLog(res.data);
  //         setLoading(false);
  //       });
  //     }
  //   });
  // }

  const dayMonthYear = (dateTime) => {
    const NewDateTime = new Date(dateTime);
    const hour = NewDateTime.getUTCHours() + 7;
    const minute = NewDateTime.getUTCMinutes();
    const month = NewDateTime.getUTCMonth() + 1; //months from 1-12
    const day = NewDateTime.getUTCDate();
    const year = NewDateTime.getUTCFullYear();
    return (
      hour +
      " นาฬิกา " +
      minute +
      " นาที " +
      " วันที่ " +
      day +
      "/" +
      month +
      "/" +
      year
    );
  };

  const orderLogDetail = (orderId) => {
    axios({
      url: `http://localhost:8000/api/order/logDetail`,
      method: "post",
      data: { orderId: orderId },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setOrderDetailLog(res.data);
      setOrderLogSelect(false);
    });
  };

  return (
    <div className="container ">
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
        <div className={classes.container__log}>
          <div className={classes.bar__log}>
            <button
              className={
                userLogSelect
                  ? classes.button__active
                  : classes.button__log + " " + "btn "
              }
              onClick={() => {
                setUserLogSelect(true);
              }}
            >
              พนักงาน
            </button>
            <button
              className={
                !userLogSelect
                  ? classes.button__active
                  : classes.button__log + " " + "btn "
              }
              onClick={() => {
                setUserLogSelect(false);
                setOrderLogSelect(true);
              }}
            >
              คำสั่งซื้อ
            </button>
          </div>
          <table
            className={
              classes.contentBox__log + " " + "table table-striped text-center "
            }
          >
            <thead>
              {userLogSelect ? (
                <tr>
                  <th scope="col">รายชื่อพนักงาน</th>
                  <th scope="col">เวลาเข้าใช้งาน</th>
                </tr>
              ) : (
                <Fragment>
                  {orderLogSelect ? (
                    <tr>
                      <th scope="col">วันที่สั่งซื้อ</th>
                      <th scope="col">รายชื่อสินค้า</th>
                      <th scope="col">การจัดการ</th>
                    </tr>
                  ) : (
                    <tr>
                      <th scope="col">รายชื่อสินค้า</th>
                      <th scope="col">รายชื่อลูกค้า</th>
                      <th scope="col">การเปลี่ยนแปลงสถานะ</th>
                      <th scope="col">เปลี่ยนสถานะโดย</th>
                      <th scope="col">เวลาในการเปลี่ยนแปลง</th>
                    </tr>
                  )}
                </Fragment>
              )}
            </thead>
            {userLogSelect ? (
              <tbody className={"align-middle "}>
                {userLog.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{dayMonthYear(user.updatedAt)}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <Fragment>
                {orderLogSelect ? (
                  <tbody className={"align-middle "}>
                    {orderLog.map((order) => (
                      <tr key={order.id}>
                        <td>{dayMonthYear(order.createdAt)}</td>
                        <td>{order.product.name}</td>
                        <td>
                          <button
                            className={"btn btn-primary"}
                            onClick={() => {
                              orderLogDetail(order.id);
                              setProductLog(order.product.name);
                            }}
                          >
                            ดูประวัติ
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody className={"align-middle "}>
                    {orderDetailLog.map((orderLog, index) => (
                      <tr key={orderLog.id}>
                        <td>{productLog}</td>
                        <td>{orderLog.user.name}</td>
                        <td>
                          <label
                            style={{
                              color:
                                orderLog.oldStatus === "Cancle"
                                  ? "red"
                                  : orderLog.oldStatuss === "Success"
                                  ? "green"
                                  : "#c96f00",
                            }}
                          >
                            {translateStatus(orderLog.oldStatus)}
                          </label>
                          {"-->"}{" "}
                          <label
                            style={{
                              color:
                                orderLog.newStatus === "Cancle"
                                  ? "red"
                                  : orderLog.newStatus === "Success"
                                  ? "green"
                                  : "#c96f00",
                            }}
                          >
                            {translateStatus(orderLog.newStatus)}
                          </label>
                        </td>
                        <td>{orderLog.staff}</td>
                        <td>{dayMonthYear(orderLog.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </Fragment>
            )}
          </table>
          <div className={classes.notfound__log}>
            {userLogSelect && userLog.length === 0 ? (
              <Fragment>
                <img src="/not-found.svg" width={100} height={100} />
                <span>ไม่มีประวัติ</span>
              </Fragment>
            ) : null}
            {!userLogSelect && orderLog.length === 0 ? (
              <Fragment>
                <img src="/not-found.svg" width={100} height={100} />
                <span>ไม่มีประวัติ</span>
              </Fragment>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { shopid } = context.query;
  const staff = await axios({
    url: `http://localhost:8000/api/user/log`,
    method: "post",
    data: { shopId: shopid[1] },
    headers: {
      "Content-Type": "application/json",
      Authorization: shopid[0],
    },
  });
  const order = await axios({
    url: `http://localhost:8000/api/order/merChantGetOrder`,
    method: "post",
    data: { shopId: shopid[1] },
    headers: {
      "Content-Type": "application/json",
      Authorization: shopid[0],
    },
  });

  return {
    props: { staff: staff.data, order: order.data },
  };
};
export default log;
