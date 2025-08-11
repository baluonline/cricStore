import Image from "next/image";
import loader from "../assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image
        src={loader}
        alt="Loading..."
        width={100}
        height={100}
        className="mx-auto mt-20"
      />
      <h1 className="text-center text-2xl font-bold mt-4">Loading...</h1>
    </div>
  );
};

export default LoadingPage;
