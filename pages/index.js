import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../components/layout/Menu";
import Loading from "../components/ui/Loading";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
function Home(props) {
  const router = useRouter();
  const [shopList, setShopList] = useState([]);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [addNewShop, setAddNewShop] = useState(true);
  const [time, setTime] = useState(false);

  const onSelect = (shopId, shopName) => {
    router.push(
      { pathname: `/shop/manage/${token}/${shopName}/${shopId}` },
      undefined,
      {
        scroll: false,
      }
    );
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    const timeoutId = setTimeout(() => setTime(!time), 3000);
    return function cleanup() {
      clearTimeout(timeoutId);
    };
  }, []);

  if (time) {
    if (loading) {
      alert("กรุณาเข้าสู่ระบบก่อนใช้งาน");
      router.replace("/login");
    }
  }

  if (token && loading) {
    const decoded = jwt_decode(token);
    axios({
      url: `http://localhost:8000/api/shop/getShop`,
      method: "post",
      data: { id: decoded.user.id },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setShopList(res.data);
      res.data.map((shop) => {
        if (shop.role === "admin") setAddNewShop(false);
      });
    });
    setLoading(false);
  }

  return (
    <div className="container">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <Menu
          shopList={shopList}
          addNewShop={addNewShop}
          onSelect={onSelect}
          token={token}
        />
      )}
    </div>
  );
}

export default Home;
