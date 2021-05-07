import classes from "./shopid.module.css";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import Loading from "../../../components/ui/Loading";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";
import jwt_decode from "jwt-decode";
const styles = {
  "containter.manage": classes.container__shopid,
  "button.manage": classes.button__shopid,
};
const ShopDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    try {
      const decoded = jwt_decode(localStorage.getItem("token"));

      if (decoded.user.id !== props.data.userId) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      } else {
        setUserRole(props.data.role);
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
        router.replace("/login");
      }
    }
  }, []);
  // if (router.query.shopid && loading) {
  //   const decoded = jwt_decode(router.query.shopid[0]);
  //   const validToken = localStorage.getItem("token");
  //   if (validToken !== router.query.shopid[0]) {
  // alert("คุณไม่มีสิทธิ๋ในการเข้าถึง");
  // router.replace("/login");
  //   }
  //   axios({
  //     url: `http://localhost:8000/api/shop/getShopById`,
  //     method: "post",
  //     data: { shopId: router.query.shopid[2], userId: decoded.user.id },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     setUserRole(res.data.role);
  //   });
  //   setLoading(false);
  // }
  return (
    <div className="container">
      <a
        className={classes.back}
        onClick={() => {
          router.back({}, {}, { scroll: false });
        }}
      >
        <h4>{"< ย้อนกลับ"}</h4>
      </a>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Fragment>
          {router.query.shopid ? (
            <label className={classes.text__shopid}>
              {router.query.shopid[1]}
            </label>
          ) : null}
          <div className={styles["containter.manage"]}>
            <div className={classes.action__shopid}>
              <button
                className={
                  classes.button__shopid + " " + "btn btn-secondary btn-lg   "
                }
                onClick={() => {
                  router.push(
                    {
                      pathname: `/shop/order/${router.query.shopid[0]}/${router.query.shopid[2]}`,
                    },
                    undefined,
                    {
                      scroll: false,
                    }
                  );
                }}
              >
                คำสั่งซื้อ
                <AiOutlineUnorderedList size="50px" />
              </button>
              <button
                className={
                  classes.button__shopid + " " + "btn btn-secondary btn-lg"
                }
                onClick={() => {
                  router.push(
                    {
                      pathname: `/shop/product/all/${router.query.shopid[0]}/${router.query.shopid[2]}`,
                    },
                    undefined,
                    {
                      scroll: false,
                    }
                  );
                }}
              >
                จัดการสินค้า
                <HiOutlineShoppingBag size="50px" />
              </button>
              {userRole === "admin" ? (
                <Fragment>
                  <button
                    className={
                      classes.button__shopid + " " + "btn btn-secondary btn-lg"
                    }
                    onClick={() => {
                      router.push(
                        {
                          pathname: `/shop/staff/${router.query.shopid[0]}/${router.query.shopid[1]}/${router.query.shopid[2]}`,
                        },
                        undefined,
                        {
                          scroll: false,
                        }
                      );
                    }}
                  >
                    จัดการผู้ดูแล
                    <BsFillPeopleFill size="50px" />
                  </button>
                  <button
                    className={
                      classes.button__shopid + " " + "btn btn-secondary btn-lg"
                    }
                    onClick={() => {
                      router.push(
                        {
                          pathname: `/shop/log/${router.query.shopid[0]}/${router.query.shopid[2]}`,
                        },
                        undefined,
                        {
                          scroll: false,
                        }
                      );
                    }}
                  >
                    ประวัติ
                    <RiHistoryFill size="50px" />
                  </button>
                </Fragment>
              ) : null}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { shopid } = context.query;
  const data = await axios({
    url: `http://localhost:8000/api/shop/getShopById`,
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

export default ShopDetail;
