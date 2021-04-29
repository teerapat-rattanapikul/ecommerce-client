import classes from "./Menu.module.css";
import Addshop from "../Addshop";
const styles = {
  boostrap: "btn btn-outline-secondary",
  "menu.module": classes.block__item,
};
const Menu = (props) => {
  console.log(props);
  return (
    <div className={classes.container__menu}>
      <Addshop />
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
    </div>
  );
};

export default Menu;
