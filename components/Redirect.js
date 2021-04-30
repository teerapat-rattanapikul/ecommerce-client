import { useRouter } from "next/router";
import { useEffect } from "react";

const Redirect = ({ to }) => {
  const router = useRouter();
  console.log("router: ", router.query);
  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
};

export default Redirect;
