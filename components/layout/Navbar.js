import classes from "./Navbar.module.css";
import Icon from "../ui/Icon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/user";
import { FiLogOut } from "react-icons/fi";
import Redirect from "../Redirect";
const Navbar = (props) => {
  const router = useRouter();
  useEffect(() => {
    const login = localStorage.getItem("token");
    if (login) {
      props.userLogin(login, true);
    }
  }, []);
  if (!props.user.status) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={classes.navbar}>
      <Icon userLogin={props.user.status} />
      <div className={classes.container__navbar}>
        <FiLogOut
          size="40px"
          color="red"
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        />
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  user: state.user,
});
const MapDispatchToProps = {
  userLogin: userLogin,
};

export default connect(MapStateToProps, MapDispatchToProps)(Navbar);
