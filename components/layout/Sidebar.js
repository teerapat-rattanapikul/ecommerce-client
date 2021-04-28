import classes from "./Sidebar.module.css";
import Addshop from "../Addshop";
import { Fragment } from "react";

const Sidebar = (props) => {
  return (
    <div className={classes.container__sidebar}>
      {props.shopList.length === 0 || props.addNewShop ? <Addshop /> : <></>}
      <Fragment>
        {props.shopList.map((shop) => (
          <button
            className={classes.content__shop}
            key={shop.id}
            onClick={() => {
              props.onSelectSidebar(shop.shopId, shop.shop.name);
            }}
          >
            {shop.shop.name}
          </button>
        ))}
      </Fragment>
    </div>
  );
};

export default Sidebar;
