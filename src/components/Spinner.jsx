import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "150px",
      }}
    >
      <RotatingLines
        strokeColor="#e8c392"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
