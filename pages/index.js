import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../components/layout/Menu";
import Loading from "../components/ui/Loading";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
function Home(props) {
  const router = useRouter();
  const [shopList, setShopList] = useState(props.data);
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
    if (props.data.status === false) {
      alert("กรุณาเข้าสู่ระบบก่อนใช้งาน");
      router.replace("/login");
    }
  }
  if (props.data.status !== false && loading) {
    props.data.map((shop) => {
      if (shop.role === "admin") {
        setAddNewShop(false);
      }
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

export const getServerSideProps = async (context) => {
  const { cookie } = context.req.headers;
  if (cookie === undefined) return { props: { data: { status: false } } };
  const token = cookie.replace("token=", "");
  const data = await axios({
    url: `http://localhost:8000/api/shop/getShop`,
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  return {
    props: { data: data.data }, // will be passed to the page component as props
  };
};

export default Home;
