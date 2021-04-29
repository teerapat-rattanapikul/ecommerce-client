import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import classes from "./order.module.css";
import { useRouter } from "next/router";
import { connect } from "react-redux";
const Order = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [orderList, setOrderList] = useState([]);
  const [orderStatus, setOrderStatus] = useState("");
  const [updateStatus, setUpdateStatus] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 250);
    if (id) {
      axios({
        url: `http://localhost:8000/api/order/getAll`,
        method: "post",
        data: { shopId: id },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        setOrderList(res.data);
      });
    }
  }, []);
  const changeStatus = (orderId) => {
    axios({
      url: `http://localhost:8000/api/order/updateStatus`,
      method: "post",
      data: { orderId: orderId, status: orderStatus },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      const orderIndex = orderList.findIndex((order) => order.id === orderId);
      orderList[orderIndex].status = orderStatus;
      setOrderList([...orderList]);
    });
  };
  return (
    <div className="container container  shadow  bg-body rounded">
      <div className={classes.container__order}>
        {orderList.map((order) => (
          <div key={order.id}>
            <div>{order.product.name}</div>
            <div>{order.product.detail}</div>
            <div>{order.totalPrice}</div>
            <div>{order.totleAmount}</div>
            <img
              className={classes.detail__image}
              src={`http://localhost:8000/${order.product.image}`}
            />
            <div>{order.status}</div>
            {props.shop.detail[id].role === "admin" ? null : (
              <Fragment>
                <button
                  onClick={() => {
                    setUpdateStatus(!updateStatus);
                    setOrderStatus(order.status);
                  }}
                >
                  update status
                </button>
                {updateStatus ? (
                  <Fragment>
                    <select
                      onChange={(e) => {
                        setOrderStatus(e.target.value);
                      }}
                      value={orderStatus}
                    >
                      <option value="Paid">Paid</option>
                      <option value="Shipping">Shipping</option>
                      <option value="Success">Success</option>
                      <option value="Cancle">Cancle</option>
                    </select>
                    <button
                      onClick={() => {
                        changeStatus(order.id);
                      }}
                    >
                      save
                    </button>
                  </Fragment>
                ) : null}
              </Fragment>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(MapStateToProps)(Order);
