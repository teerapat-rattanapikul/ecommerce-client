import classes from "./shopid.module.css";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";

const styles = {
  "containter.manage": classes.container__shopid,
  "button.manage": classes.button__shopid,
};
const ShopDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [userRole, setUserRole] = useState("");

  if (router.query.shopid && props.user.id && loading) {
    if (Object.keys(props.shop.detail).length === 0) {
      axios({
        url: `http://localhost:8000/api/shop/getShopById`,
        method: "post",
        data: { shopId: router.query.shopid[1], userId: props.user.id },
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setUserRole(res.data.role);
      });
    } else {
      setUserRole(props.shop.detail[router.query.shopid[1]].role);
    }
    setLoading(false);
  }

  return (
    <div className="container container  shadow  bg-body rounded">
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#8a9bae"
          height={100}
          width={100}
          visible={loading}
          className="loading"
        />
      ) : (
        <Fragment>
          {router.query.shopid ? (
            <label className={classes.text__shopid}>
              {router.query.shopid[0]}
            </label>
          ) : null}
          <div className={styles["containter.manage"]}>
            <div className={classes.action__shopid}>
              <button
                className={
                  classes.button__shopid + " " + "btn btn-secondary btn-lg   "
                }
                onClick={() => {
                  router.push(`/shop/order/${router.query.shopid[1]}`);
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
                  router.push(`/shop/product/all/${router.query.shopid[1]}`);
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
                        `/shop/staff/${router.query.shopid[0]}/${router.query.shopid[1]}`
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
                      router.push(`/shop/log/${router.query.shopid[1]}`);
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

const MapStateToProps = (state) => ({
  shop: state.shop,
  user: state.user,
});

export default connect(MapStateToProps)(ShopDetail);
