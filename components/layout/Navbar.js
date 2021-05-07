import classes from "./Navbar.module.css";
import Icon from "../ui/Icon";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useCookies } from "react-cookie";
const style = {
  active: classes.navbar + " " + classes.active,
  inactive: classes.navbar,
};
const Navbar = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const [navbar, setNavbar] = useState(true);
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    if (cookies.token !== "undefined") {
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
    <div
      className={userLogin ? (navbar ? style.inactive : style.active) : null}
    >
      {userLogin ? <Icon scroll={navbar} /> : null}
      <div className={classes.container__navbar}>
        {userLogin ? (
          <FiLogOut
            size="40px"
            color="red"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (window.confirm("ต้องการออกจากระบบหรือไม่?")) {
                removeCookie("token");
                localStorage.removeItem("token");
                window.location.href = "/login";
              }
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
