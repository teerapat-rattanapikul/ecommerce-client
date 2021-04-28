import classes from "./shopid.module.css";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { Fragment } from "react";
const ShopDetail = (props) => {
  const router = useRouter();
  if (
    Object.keys(router.query).length === 0 ||
    Object.keys(props.shop.detail).length === 0
  )
    return null;
  return (
    <div className="container">
      <div className={classes.container__shopid}>
        {router.query.shopid ? <label>{router.query.shopid[0]}</label> : null}
        <div className={classes.action__shopid}>
          {props.shop.detail[router.query.shopid[1]].role === "admin" ? (
            <Fragment>
              <button
                className={classes.button__shopid}
                style={{ backgroundColor: "green" }}
                onClick={() => {
                  router.push(
                    `/shop/staff/${router.query.shopid[0]}/${router.query.shopid[1]}`
                  );
                }}
              >
                MANAGE STAFF
              </button>
              <button
                className={classes.button__shopid}
                style={{ backgroundColor: "blue" }}
                onClick={() => {
                  router.push(
                    `/shop/staff/${router.query.shopid[0]}/${router.query.shopid[1]}`
                  );
                }}
              >
                LOG
              </button>
            </Fragment>
          ) : null}
          <button
            className={classes.button__shopid}
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              router.push(`/shop/order/${router.query.shopid[1]}`);
            }}
          >
            ORDER
          </button>
          <button
            className={classes.button__shopid}
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              router.push(`/shop/product/all/${router.query.shopid[1]}`);
            }}
          >
            MANAGE PRIDUCT
          </button>
        </div>
      </div>
    </div>
  );
};

const MapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(MapStateToProps)(ShopDetail);
