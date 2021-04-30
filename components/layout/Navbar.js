import classes from "./Navbar.module.css";
import Icon from "../ui/Icon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userLogin, tokenFetch } from "../../redux/actions/user";
import { addshop } from "../../redux/actions/shop";
import { FiLogOut } from "react-icons/fi";
import Redirect from "../Redirect";
const Navbar = (props) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      props.tokenFetch(token);
    }
  }, []);
  if (props.user) {
    // return <Redirect to={`/login`} />;
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
  shpop: state.shop,
});
const MapDispatchToProps = {
  userLogin: userLogin,
  tokenFetch: tokenFetch,
  addshop: addshop,
};

export default connect(MapStateToProps, MapDispatchToProps)(Navbar);
