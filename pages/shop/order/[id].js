import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
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
    if (id) {
      axios({
        url: `http://localhost:8000/api/order/getAll`,
        method: "post",
        data: { shopId: id },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
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
                    {props.shop.detail[id].role === "admin" ? null : (
                      <th scope="col">การจัดการ</th>
                    )}
                  </tr>
                </thead>
                <tbody className={"align-middle "}>
                  {orderList.map((order) => (
                    <tr key={order.id}>
                      <td>{order.product.name}</td>
                      {console.log(order.product.image)}
                      <td>
                        {order.product.image ? (
                          <img
                            src={`http://localhost:8000/${order.product.image}`}
                            width={100}
                            height={100}
                          />
                        ) : null}
                      </td>
                      <td>{order.totalAmount}</td>
                      <td>{order.totalPrice}</td>

                      <td>{order.status}</td>
                      <td>
                        {props.shop.detail[id].role === "admin" ? null : (
                          <div className={classes.status__order}>
                            {updateStatus ? (
                              <Fragment>
                                <select
                                  class="form-select mb-1"
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
                                  className="btn btn-success btn-sm mb-1"
                                  onClick={() => {
                                    changeStatus(order.id);
                                    setUpdateStatus(!updateStatus);
                                  }}
                                >
                                  บันทึก
                                </button>
                              </Fragment>
                            ) : (
                              <button
                                className="btn btn-primary btn-sm mb-1"
                                onClick={() => {
                                  setUpdateStatus(!updateStatus);
                                  setOrderStatus(order.status);
                                }}
                              >
                                แก้ไขสถานะ
                              </button>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Fragment>
          )}
        </Fragment>
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(MapStateToProps)(Order);
