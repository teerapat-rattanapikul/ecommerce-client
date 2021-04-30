import classes from "./log.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react";
const log = () => {
  const [userLog, setUserLog] = useState([]);
  const [userLogSelect, setUserLogSelect] = useState(true);
  const [orderDetailLog, setOrderDetailLog] = useState([]);
  const [orderLogSelect, setOrderLogSelect] = useState(true);
  const [productLog, setProductLog] = useState("");
  const [orderLog, setOrderLog] = useState([]);
  const router = useRouter();
  const { shopid } = router.query;
  useEffect(() => {
    if (shopid) {
      axios({
        url: `http://localhost:8000/api/user/log`,
        method: "post",
        data: { shopId: shopid },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setUserLog(res.data);
      });

      axios({
        url: `http://localhost:8000/api/order/getAll`,
        method: "post",
        data: { shopId: shopid },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setOrderLog(res.data);
      });
    }
  }, []);

  const dayMonthYear = (dateTime) => {
    const NewDateTime = new Date(dateTime);
    const hour = NewDateTime.getUTCHours();
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
    console.log(orderId);
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
    <div className="container container  shadow  bg-body rounded">
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
                    <th scope="col">รายชื่อผลิตภัณฑ์</th>
                    <th scope="col">การจัดการ</th>
                  </tr>
                ) : (
                  <tr>
                    <th scope="col">รายชื่อผลิตภัณฑ์</th>
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
                  <td>{user.email}</td>
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
                      <td>{order.product.name}</td>
                      <td>
                        <button
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
                  {orderDetailLog.map((orderLog) => (
                    <tr key={orderLog.id}>
                      <td>{productLog}</td>
                      <td>
                        {orderLog.oldStatus} {"-->"} {orderLog.newStatus}
                      </td>
                      <td>{orderLog.user.email}</td>
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
    </div>
  );
};

export default log;
