import { Fragment, useEffect, useState } from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  console.log(props.children);
  return (
    <Fragment>
      {props.modal ? (
        <div className={classes.background__modal}>
          <div
            className={classes.container__modal}
            onClick={props.handlerModal}
          ></div>
          <div className={classes.form__modal}>{props.children}</div>
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default Modal;
