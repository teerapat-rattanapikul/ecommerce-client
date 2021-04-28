import { useEffect } from "react";
import classes from "./StaffList.module.css";

const StaffList = (props) => {
  return (
    <div className={classes.container__stafflist}>
      {props.hireUser.map((user) => {
        if (props.staffList.includes(user.id)) {
          return <div key={user.id}>{user.email}</div>;
        }

        return;
      })}
    </div>
  );
};

export default StaffList;
