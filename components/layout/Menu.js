import classes from "./Menu.module.css";
import Addshop from "../Addshop";
import { Fragment } from "react";
const styles = {
  boostrap: "btn btn-outline-secondary",
  "menu.module": classes.block__item,
};
const Menu = (props) => {
  return (
    <div className={classes.container__menu}>
      {props.shopList.length === 0 || props.addNewShop ? <Addshop /> : <></>}
      <Fragment>
        {props.shopList.map((shop) => (
          <button
            className={styles["boostrap"] + " " + styles["menu.module"]}
            key={shop.id}
            onClick={() => {
              props.onSelect(shop.shopId, shop.shop.name);
            }}
          >
            {shop.shop.name}
          </button>
        ))}
      </Fragment>
    </div>
  );
};

export default Menu;
