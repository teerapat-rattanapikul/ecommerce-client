import classes from "./Navbar.module.css";
import Icon from "../ui/Icon";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
const style = {
  active: classes.navbar + " " + classes.active,
  inactive: classes.navbar,
};
const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLogin(true);
    }

    window.addEventListener("scroll", scrollChangeBackGround);
  }, []);

  const scrollChangeBackGround = () => {
    if (window.scrollY >= 10) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  return (
    <div className={navbar ? style.inactive : style.active}>
      {userLogin ? <Icon scroll={navbar} /> : null}
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

export default Navbar;
