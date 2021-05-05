import Loader from "react-loader-spinner";

const Loading = (props) => {
  return (
    <Loader
      type="ThreeDots"
      color="#8a9bae"
      height={100}
      width={100}
      visible={props.loading}
      className="loading"
    />
  );
};

export default Loading;
