import { useState } from "react";
import classes from "./add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import back from "../manage/shopid.module.css";
const AddShop = (props) => {
  const [shopName, setShopName] = useState("");
  const [errName, setErrName] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();
  const createShop = () => {
    const decoded = jwt_decode(router.query.id);
    const validToken = localStorage.getItem("token");
    if (validToken !== router.query.id) {
      alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
      router.replace("/login");
    }
    if (shopName !== "") {
      axios({
        url: `http://localhost:8000/api/shop/addShop`,
        method: "post",
        data: { shopName: shopName, id: decoded.user.id },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.data.status === true) {
          router.replace("/");
        } else {
          setErrName(true);
          setErrMsg(res.data.errMsg);
        }
      });
    }
  };

  return (
    <div className={classes.block__add + " " + "container "}>
      <a
        className={back.back}
        onClick={() => {
          router.back();
        }}
      >
        <h4>{"< ย้อนกลับ"}</h4>
      </a>
      <div className={classes.contianer__add}>
        <label className={classes.title__add}>เปิดร้าน</label>
        <label className={classes.text__add}>ชื่อร้าน:</label>
        <input
          type="text"
          value={shopName}
          className={"form-label p-2"}
          placeholder="กรุณาใส่ช่ือร้าน"
          onChange={(e) => {
            setShopName(e.target.value);
          }}
        />
        <input
          type="submit"
          className={"btn btn-success"}
          value="ตั้งร้าน"
          onClick={createShop}
        />
        {errName ? <div className={classes.error__add}>{errMsg}</div> : <></>}
      </div>
    </div>
  );
};

export default AddShop;
