import classes from "./Icon.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Router from "next/router";

const Icon = (props) => {
  const [path, setPath] = useState("/");
  return (
    <Link href="/">
      <a className={classes.icon}>Merchance</a>
    </Link>
  );
};

export default Icon;
