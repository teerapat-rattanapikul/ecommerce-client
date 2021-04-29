import classes from "./shopid.module.css";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Fragment, useEffect } from "react";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";

const styles = {
  "containter.manage": classes.container__shopid,
  "button.manage": classes.button__shopid,
};
const ShopDetail = (props) => {
  const router = useRouter();
  if (
    Object.keys(router.query).length === 0 ||
    Object.keys(props.shop.detail).length === 0
  )
    return null;

  useEffect(() => {
    window.scrollTo(0, 250);
  }, []);

  return (
    <div className="container container  shadow  bg-body rounded">
      {router.query.shopid ? (
        <label className={classes.text__shopid}>{router.query.shopid[0]}</label>
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
          {props.shop.detail[router.query.shopid[1]].role === "admin" ? (
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
    </div>
  );
};

const MapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(MapStateToProps)(ShopDetail);
