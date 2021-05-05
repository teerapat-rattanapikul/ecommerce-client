import classes from "./Addshop.module.css";
import { useRouter } from "next/router";
const styles = {
  boostrap: "btn btn-outline-light",
  "addshop.module": classes.button__addshop,
};
const Addshop = (props) => {
  const router = useRouter();
  const addShop = () => {
    router.push(`/shop/add/${props.token}`);
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

export default Addshop;
