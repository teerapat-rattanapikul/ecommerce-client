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
  const [orderLog, setOrderLog] = useState([]);
  const router = useRouter();
  const { shopid } = router.query;
  useEffect(() => {
    window.scrollTo(0, 250);
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
          <input
            type="submit"
            className={classes.button__log}
            value="staff"
            onClick={() => {
              setUserLogSelect(true);
            }}
          />
          <input
            type="submit"
            className={classes.button__log}
            value="order"
            onClick={() => {
              setUserLogSelect(false);
              setOrderLogSelect(true);
            }}
          />
        </div>
        {userLogSelect ? (
          <div className={classes.contentBox__log}>
            <div className={classes.mainContent__log}>
              <label>staff email</label>
              <label>login at</label>
            </div>
            {userLog.map((user) => (
              <div key={user.id} className={classes.mainContent__log}>
                <label>{user.email}</label>
                <label>{dayMonthYear(user.updatedAt)}</label>
              </div>
            ))}
          </div>
        ) : (
          <Fragment>
            {orderLogSelect ? (
              <div className={classes.contentBox__log}>
                {orderLog.map((order) => (
                  <div key={order.id} className={classes.mainContent__log}>
                    <input
                      type="submit"
                      value={order.product.name}
                      onClick={() => {
                        orderLogDetail(order.id);
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={classes.contentBox__log}>
                {orderDetailLog.map((orderLog) => (
                  <div key={orderLog.id} className={classes.mainContent__log}>
                    <label>{orderLog.order.product.name}</label>
                    <label>
                      {orderLog.oldStatus} {"-->"} {orderLog.newStatus}
                    </label>
                    <label>{dayMonthYear(orderLog.createdAt)}</label>
                  </div>
                ))}
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default log;
