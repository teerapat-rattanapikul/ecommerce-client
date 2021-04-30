import axios from "axios";
import { useEffect, useState } from "react";
import { addshop } from "../redux/actions/shop";
import Loader from "react-loader-spinner";
import Menu from "../components/layout/Menu";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Redirect from "../components/Redirect";
function Home(props) {
  const router = useRouter();
  const [shopList, setShopList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addNewShop, setAddNewShop] = useState(true);
  const [time, setTime] = useState(false);
  const onSelect = (shopId, shopName) => {
    router.push(`/shop/manage/${shopName}/${shopId}`);
  };
  useEffect(() => {
    setTimeout(() => {
      setTime(!time);
    }, 3000);
  }, []);

  if (time) {
    if (loading) {
      alert("กรุณาเข้าสู่ระบบก่อนใช้งาน");
      router.replace("/login");
    }
  }
  if (props.user.status && loading) {
    axios({
      url: `http://localhost:8000/api/shop/getShop`,
      method: "post",
      data: { id: props.user.id },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setShopList(res.data);
      res.data.map((shop) => {
        if (shop.role === "admin") setAddNewShop(false);
        props.addshop(shop);
        setLoading(false);
      });
    });
  }
  // useEffect(() => {
  //   if (!props.user.status) setLoad(!load);
  //   axios({
  //     url: `http://localhost:8000/api/shop/getShop`,
  //     method: "post",
  //     data: { id: props.user.id },
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     setShopList(res.data);
  //     res.data.map((shop) => {
  //       if (shop.role === "admin") setAddNewShop(false);
  //       props.addshop(shop);
  //     });
  //   });
  // }, []);

  return (
    <div className="container  shadow  bg-body rounded">
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
        <Menu shopList={shopList} addNewShop={addNewShop} onSelect={onSelect} />
      )}
    </div>
  );
}

const MapStatetoProps = (state) => ({
  user: state.user,
  shop: state.shop,
});

const MapDispatchToProps = {
  addshop: addshop,
};

export default connect(MapStatetoProps, MapDispatchToProps)(Home);
