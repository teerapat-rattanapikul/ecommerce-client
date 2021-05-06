import classes from "./Icon.module.css";
import Link from "next/link";
import { useState } from "react";

const style = {
  active: classes.active,
  inactive: classes.icon,
};
const Icon = (props) => {
  return (
    <Link href="/">
      <a className={props.scroll ? style.inactive : style.active}>Merchance</a>
    </Link>
  );
};

export default Icon;
