import { useState } from "react";
import classes from "./add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { connect } from "react-redux";
const AddShop = (props) => {
  const [shopName, setShopName] = useState("");
  const [errName, setErrName] = useState(false);
  const router = useRouter();
  const createShop = () => {
    if (shopName !== "") {
      axios({
        url: `http://localhost:8000/api/shop/addShop`,
        method: "post",
        data: { shopName: shopName, id: props.user.id },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.data === true) {
          router.push("/");
        } else {
          setErrName(true);
        }
      });
    }
  };

  return (
    <div className="container">
      <div className={classes.contianer__add}>
        <label className={classes.title__add}>Add shop</label>
        <label className={classes.text__add}>Shop name:</label>
        <input
          type="text"
          value={shopName}
          className={classes.input__add}
          placeholder="type your shop name"
          onChange={(e) => {
            setShopName(e.target.value);
          }}
        />
        <input
          type="submit"
          className={classes.submit__add}
          value="create"
          onClick={createShop}
        />
        {errName ? (
          <div className={classes.error__add}>Cannot use this shop name</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
const MapStatetoProps = (state) => ({
  user: state.user,
});
export default connect(MapStatetoProps)(AddShop);
