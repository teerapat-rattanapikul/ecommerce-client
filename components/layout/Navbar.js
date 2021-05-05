import classes from "./Navbar.module.css";
import Icon from "../ui/Icon";
import { useEffect, useState } from "react";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { useRouter } from "next/router";
const Navbar = (props) => {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLogin(true);
    }
  }, []);
  // console.log(userLogin);
  return (
    <div className={classes.navbar}>
      {userLogin ? <Icon /> : null}
      <div className={classes.container__navbar}>
        {userLogin ? (
          <FiLogOut
            size="40px"
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}
export default Navbar;
