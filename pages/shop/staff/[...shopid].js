import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./staff.module.css";
import axios from "axios";
import { connect } from "react-redux";
import StaffList from "../../../components/StaffList";
const staffManage = (props) => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [hireUser, setHireUser] = useState([]);
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 250);
    if (Object.keys(router.query).length > 0) {
      axios({
        url: `http://localhost:8000/api/user/getUsertoHire`,
        method: "post",
        data: { id: props.user.id, shopId: router.query.shopid[1] },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setUser(res.data.userList);
        setHireUser(res.data.userList);
        setStaffList(res.data.staffList);
      });
    }
  }, []);

  const Hire = (userId) => {
    axios({
      url: `http://localhost:8000/api/user/hireStaff`,
      method: "post",
      data: {
        userId: userId,
        shopId: router.query.shopid[1],
        shopName: router.query.shopid[0],
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setUser(user.filter((USER) => USER.id !== userId));
      setStaffList([...staffList, userId]);
      // router.back()
    });
  };

  return (
    <div className="container container  shadow  bg-body rounded">
      <div className={classes.container__staff}>
        <div className={classes.block__staff}>
          {user.map((USER) => {
            if (staffList.includes(USER.id)) {
              return;
            }
            return (
              <div key={USER.id} className={classes.content__staff}>
                <div>{USER.email}</div>
                <button
                  className={classes.button__staff}
                  onClick={() => {
                    Hire(USER.id);
                  }}
                >
                  HIRE
                </button>
              </div>
            );
          })}
        </div>
        <StaffList staffList={staffList} hireUser={hireUser} />
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  user: state.user,
});
export default connect(MapStateToProps)(staffManage);
