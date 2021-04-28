import classes from "./Addshop.module.css";
import { connect } from "react-redux";
import { useRouter } from "next/router";

const Addshop = () => {
  const router = useRouter();

  const addShop = () => {
    router.push("/shop/add");
  };
  return (
    <div className={classes.container__addshop}>
      <button className={classes.button__addshop} onClick={addShop}>
        Add your shop
      </button>
    </div>
  );
};

const MapStateToProps = (state) => ({
  user: state.user,
});

export default connect(MapStateToProps)(Addshop);
