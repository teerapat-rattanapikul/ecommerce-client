import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import classes from "./staff.module.css";
import axios from "axios";
import StaffList from "../../../components/StaffList";
import Loader from "react-loader-spinner";
import { BsPersonPlusFill } from "react-icons/bs";
import jwt_decode from "jwt-decode";
import back from "../manage/shopid.module.css";
const staffManage = (props) => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const [hireUser, setHireUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    try {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.user.id !== props.data.merchant) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      } else {
        setUser(props.data.userList);
        setHireUser(props.data.userList);
        setStaffList(props.data.staffList);
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      }
    }
  }, []);
  // if (shopid && loading) {
  //   const decoded = jwt_decode(shopid[0]);
  //   const validToken = localStorage.getItem("token");
  //   if (validToken !== shopid[0]) {
  //     alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
  //     router.replace("/login");
  //   }
  //   axios({
  //     url: `http://localhost:8000/api/user/getUsertoHire`,
  //     method: "post",
  //     data: { userId: decoded.user.id, shopId: shopid[2] },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     if (!res.data) {
  //       alert("คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล");
  //       router.replace("/login");
  //     } else {
  // setUser(res.data.userList);
  // setHireUser(res.data.userList);
  // setStaffList(res.data.staffList);
  //       setLoading(false);
  //     }
  //   });
  // }

  const Hire = (userId) => {
    axios({
      url: `http://localhost:8000/api/user/hireStaff`,
      method: "post",
      data: {
        userId: userId,
        shopId: router.query.shopid[2],
        shopName: router.query.shopid[1],
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setUser(user.filter((USER) => USER.id !== userId));
      setStaffList([...staffList, userId]);
    });
  };

  const unHire = async (userId, userName) => {
    axios({
      url: `http://localhost:8000/api/user/unHireStaff`,
      method: "post",
      data: {
        userId: userId,
        shopId: router.query.shopid[2],
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setUser([
        ...hireUser.filter((user) => !staffList.includes(user.id)),
        { id: userId, name: userName },
      ]);

      setStaffList(staffList.filter((id) => id !== userId));
    });
  };

  return (
    <div className="container">
      <a
        className={back.back}
        onClick={() => {
          router.back();
        }}
      >
        <h4>{"< ย้อนกลับ"}</h4>
      </a>
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
                          if (
                            window.confirm(`ต้องการจ้าง ${USER.name} หรือไม่?`)
                          ) {
                            Hire(USER.id);
                          }
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <StaffList
            staffList={staffList}
            hireUser={hireUser}
            unHire={unHire}
          />
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
export const getServerSideProps = async (context) => {
  const { shopid } = context.query;
  const data = await axios({
    url: `http://localhost:8000/api/user/getUsertoHire`,
    method: "post",
    data: { shopId: shopid[2] },
    headers: {
      "Content-Type": "application/json",
      Authorization: shopid[0],
    },
  });
  return {
    props: { data: data.data },
  };
};
export default staffManage;
