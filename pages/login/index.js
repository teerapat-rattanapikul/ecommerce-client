import classes from "./login.module.css";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Redirect from "../../components/Redirect";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions/user";
import { useRouter } from "next/router";
const Login = (props) => {
  const [login, setLogin] = useState(true);
  const [errLogin, setErrLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (props.user.status) {
    return <Redirect to="/" />;
  }

  const handlerSubmit = () => {
    let authAction = "login";
    if (!login) {
      authAction = "register";
    }
    axios({
      url: `http://localhost:8000/api/user/${authAction}`,
      method: "post",
      data: { email: email, password: password },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.data.status === true) {
        if (login) {
          localStorage.setItem("token", res.data.dataValues.id);
          props.userLogin(res.data.dataValues.id, true);
        } else {
        }
      } else {
        setErrLogin(true);
      }
    });
    setEmail(""), setPassword("");
  };
  return (
    <Fragment>
      <div className="container">
        <div className={classes.form__login}>
          <label className={classes.title__login}>
            {login ? "ACCOUNT LOGIN" : "ACCOUNT REGISTER"}
          </label>
          <label className={classes.text__login}>Email :</label>
          <input
            type="text"
            className={classes.input__login}
            placeholder="type your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className={classes.text__login}>Password :</label>
          <input
            type="text"
            className={classes.input__login}
            placeholder="type your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="submit"
            className={classes.submit__login}
            value={login ? "login" : "register"}
            onClick={handlerSubmit}
          />
          <label style={{ textAlign: "center" }}>
            Not have account?{" "}
            <a
              style={{ color: login ? "red" : "green", cursor: "pointer" }}
              onClick={() => {
                setErrLogin(false);
                setEmail("");
                setPassword("");
                setLogin(!login);
              }}
            >
              {login ? "create" : "login"}
            </a>
          </label>
          {errLogin ? (
            <div className={classes.error__login}>
              Your Email or Password Wrong!!!
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const MapStateToProps = (state) => ({
  user: state.user,
});

const MapDispatchToProps = {
  userLogin: userLogin,
};

export default connect(MapStateToProps, MapDispatchToProps)(Login);
