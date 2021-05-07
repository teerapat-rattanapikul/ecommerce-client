import { useState, Fragment } from "react";
import classes from "./Order.module.css";
import { translateStatus } from "../../helppers/transletStatus";
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

      <td
        style={{
          color:
            props.status === "Cancle"
              ? "red"
              : props.status === "Success"
              ? "green"
              : "#c96f00",
        }}
      >
        {translateStatus(props.status)}
      </td>
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
                  <option value="Paid">จ่ายเงินแล้ว</option>
                  <option value="Shipping">กำลังส่งสินค้า</option>
                  <option value="Success">ดำเนินการเสร็จสิ้น</option>
                  <option value="Cancle">ยกเลิกออเดอร์</option>
                </select>
                <button
                  className="btn btn-success btn-sm mb-1"
                  onClick={() => {
                    if (
                      window.confirm("ต้องการที่จะเปลี่ยนสถานะสินค้าหรือไม่")
                    ) {
                      props.changeStatus(props.id, orderStatus);
                      setUpdateStatus(!updateStatus);
                    } else {
                      console.log("ไม่เปลี่ยน");
                    }
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
