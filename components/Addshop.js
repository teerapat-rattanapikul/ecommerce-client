import classes from "./Addshop.module.css";
import { connect } from "react-redux";
import { useRouter } from "next/router";

const styles = {
  boostrap: "btn btn-outline-light",
  "addshop.module": classes.button__addshop,
};
const Addshop = () => {
  const router = useRouter();

  const addShop = () => {
    router.push("/shop/add");
  };
  return (
    <button
      className={styles["boostrap"] + " " + styles["addshop.module"]}
      onClick={addShop}
    >
      +
    </button>
  );
};

const MapStateToProps = (state) => ({
  user: state.user,
});

export default connect(MapStateToProps)(Addshop);
