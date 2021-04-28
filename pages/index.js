import axios from "axios";
import { useEffect, useState } from "react";
import { addshop } from "../redux/actions/shop";
import Sidebar from "../components/layout/Sidebar";
import { connect } from "react-redux";
import { useRouter } from "next/router";
function Home(props) {
  const router = useRouter();
  const [shopList, setShopList] = useState([]);
  const [addNewShop, setAddNewShop] = useState(true);
  const onSelectSidebar = (shopId, shopName) => {
    router.push(`/shop/manage/${shopName}/${shopId}`);
  };
  useEffect(() => {
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
      });
    });
  }, []);

  return (
    <div className="container">
      <Sidebar
        shopList={shopList}
        addNewShop={addNewShop}
        onSelectSidebar={onSelectSidebar}
      />
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
