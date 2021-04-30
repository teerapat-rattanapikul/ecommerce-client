import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./staff.module.css";
import axios from "axios";
import { connect } from "react-redux";
import StaffList from "../../../components/StaffList";
import Loader from "react-loader-spinner";
import { BsPersonPlusFill } from "react-icons/bs";
const staffManage = (props) => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [hireUser, setHireUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [staffList, setStaffList] = useState([]);

  // useEffect(() => {
  //   if (Object.keys(router.query).length > 0) {
  //     console.log("yeah");
  //     axios({
  //       url: `http://localhost:8000/api/user/getUsertoHire`,
  //       method: "post",
  //       data: { id: props.user.id, shopId: router.query.shopid[1] },
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       console.log(res);
  //       setUser(res.data.userList);
  //       setHireUser(res.data.userList);
  //       setStaffList(res.data.staffList);
  //       console.log(user.length, staffList.length);
  //     });
  //   }
  // }, [router.query]);
  if (props.user.status && loading && Object.keys(router.query).length > 0) {
    axios({
      url: `http://localhost:8000/api/user/getUsertoHire`,
      method: "post",
      data: { id: props.user.id, shopId: router.query.shopid[1] },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      setUser(res.data.userList);
      setHireUser(res.data.userList);
      setStaffList(res.data.staffList);
      setLoading(false);
    });
  }

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
      {!loading ? (
        <div className={classes.container__staff}>
          <div className={classes.block__staff}>
            <div className={classes.title__staff}>
              รายชื่อของผู้ใช้งานที่สามารถเลือกได้
            </div>
            {hireUser.length === staffList.length ? (
              <div className={classes.missing_staff}>
                <img src="/missing.png" width={150} height={150} />
                <span>ยังไม่มีผู้ใช้งานให้เลือก</span>
              </div>
            ) : (
              <div>
                {user.map((USER) => {
                  if (staffList.includes(USER.id)) {
                    return;
                  }
                  return (
                    <div key={USER.id} className={classes.content__staff}>
                      <div>{USER.name}</div>
                      <BsPersonPlusFill
                        size="40px"
                        className={classes.button__staff}
                        onClick={() => {
                          Hire(USER.id);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <StaffList staffList={staffList} hireUser={hireUser} />
        </div>
      ) : (
        <Loader
          type="ThreeDots"
          color="#8a9bae"
          height={100}
          width={100}
          visible={loading}
          className="loading"
        />
      )}
    </div>
  );
};

const MapStateToProps = (state) => ({
  user: state.user,
});
export default connect(MapStateToProps)(staffManage);
