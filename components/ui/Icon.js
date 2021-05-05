import classes from "./Icon.module.css";
import Link from "next/link";
import { useState } from "react";

const Icon = () => {
  const [path, setPath] = useState("/");
  return (
    <Link href="/">
      <a className={classes.icon}>Merchance</a>
    </Link>
  );
};

export default Icon;
