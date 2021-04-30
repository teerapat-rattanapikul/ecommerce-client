import { Fragment, useEffect } from "react";
import classes from "./StaffList.module.css";
import Image from "next/image";

const StaffList = (props) => {
  return (
    <div className={classes.container__stafflist}>
      <div className={classes.title__staff}>รายชื่อของพนักงานที่ถูกเลือก</div>
      {props.staffList.length === 0 ? (
        <div className={classes.minssing__staffList}>
          <img src="/missing.png" width={150} height={150} />
          <span>ยังไม่มีผนักงาน</span>
        </div>
      ) : (
        <Fragment>
          {props.hireUser.map((user) => {
            if (props.staffList.includes(user.id)) {
              return (
                <div className={classes.content__staffList} key={user.id}>
                  {user.name}
                </div>
              );
            }

            return;
          })}
        </Fragment>
      )}
    </div>
  );
};

export default StaffList;
