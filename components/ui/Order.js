import { useState, Fragment } from "react";
import classes from "./Order.module.css";
const OrderComponent = (props) => {
  const [updateStatus, setUpdateStatus] = useState(false);
  const [orderStatus, setOrderStatus] = useState("");
  return (
    <tr>
      <td>{props.productName}</td>
      <td>
        {props.image ? (
          <img
            src={`http://localhost:8000/${props.image}`}
            width={100}
            height={100}
          />
        ) : null}
      </td>
      <td>{props.totalAmount}</td>
      <td>{props.totalPrice}</td>

      <td>{props.status}</td>
      <td>
        {props.userRole === "admin" ? null : (
          <div className={classes.status__order}>
            {updateStatus ? (
              <Fragment>
                <select
                  className="form-select mb-1"
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
                    props.changeStatus(props.id, orderStatus);
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
                  setOrderStatus(props.status);
                }}
              >
                แก้ไขสถานะ
              </button>
            )}
          </div>
        )}
      </td>
    </tr>
  );
};

export default OrderComponent;
