import classes from "./Menu.module.css";
import Addshop from "../Addshop";
import Loading from "../ui/Loading";
import { Fragment } from "react";
const styles = {
  boostrap: "btn btn-outline-secondary",
  "menu.module": classes.block__item,
};
const Menu = (props) => {
  return (
    <div className={classes.container__menu}>
      {props.shopList.length === 0 || props.addNewShop ? (
        <Addshop token={props.token} />
      ) : (
        <></>
      )}
      <Fragment>
        {props.shopList.map((shop) => (
          <button
            className={styles["boostrap"] + " " + styles["menu.module"]}
            key={shop.id}
            onClick={() => {
              props.onSelect(shop.shopId, shop.shop.name);
            }}
          >
            <label> {shop.shop.name}</label>
            {shop.role === "admin" ? (
              <label className={classes.adminshop}>ร้านของคุณ</label>
            ) : null}
          </button>
        ))}
      </Fragment>
    </div>
  );
};

export default Menu;
