import classes from "./login.module.css";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Redirect from "../../components/Redirect";
const Login = (props) => {
  const [login, setLogin] = useState(true);
  const [errLogin, setErrLogin] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUserLogin(true);
  }, []);

  if (userLogin) {
    return <Redirect to="/" />;
  }
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handlerSubmit = () => {
    if (!validateEmail(email)) {
      alert("อีเมลไม่ถูกต้อง");
      return;
    }
    let authAction = "login";
    let dataAuth = {
      email: email,
      password: password,
    };
    if (!login) {
      if (name.trim === "") alert("กรุณาใส่ข้อมูลให้ครบ");
      authAction = "register";
      dataAuth["name"] = name;
    }
    if (email.trim === "" || password.trim() === "") {
      alert("กรุณาใส่ข้อมูลให้ครบ");
    } else {
      axios({
        url: `http://localhost:8000/api/user/${authAction}`,
        method: "post",
        data: dataAuth,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status === true) {
          if (login) {
            localStorage.setItem("token", res.data.token);
            setUserLogin(true);
            window.location.href = "/";
          } else {
            setErrLogin(false);
            alert("สมัครสมาชิกเรียบร้อย");
            setLogin(!login);
          }
        } else {
          setErrMsg(res.data.error);
          setErrLogin(true);
        }
      });
      setEmail(""), setPassword(""), setName("");
    }
  };

  return (
    <Fragment>
      <div
        className={classes.container__login + " " + "container"}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handlerSubmit();
          }
        }}
      >
        <div className={classes.form__login}>
          <label className={classes.title__login}>
            {login ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </label>
          <label className={classes.text__login}> อีเมล :</label>
          <input
            type="text"
            className={"form-label p-2"}
            placeholder="กรุณาใส่อีเมล"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {!login ? (
            <Fragment>
              <label className={classes.text__login}>ชื่อผู้ใช้งาน</label>
              <input
                type="text"
                className={"form-label p-2"}
                placeholder="กรุณาใส่ชื่อผู้ใช้งาน"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Fragment>
          ) : null}
          <label className={classes.text__login}>รหัสผ่าน :</label>
          <input
            type="text"
            className={"form-label p-2" + " " + classes.input_secure}
            placeholder="กรุณาใส่รหัสผ่าน"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="submit"
            className={"btn btn-primary mt-3 mb-3"}
            value={login ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
            onClick={handlerSubmit}
          />
          <label style={{ textAlign: "center" }}>
            {login ? "ท่านยังไม่ได้เป็นสมาชิกใช่ไหม? " : "มีบัญชีอยู่แล้ว "}
            <a
              style={{ color: login ? "red" : "green", cursor: "pointer" }}
              onClick={() => {
                setErrLogin(false);
                setEmail("");
                setPassword("");
                setName("");
                setLogin(!login);
              }}
            >
              {login ? "สร้างเลย" : "เข้าสู่ระบบ"}
            </a>
          </label>
          {errLogin ? (
            <div className={classes.error__login}>{errMsg}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
