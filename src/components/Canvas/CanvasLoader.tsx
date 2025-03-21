
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="w-20 h-20 border-2 border-primary border-opacity-20 border-t-primary rounded-full animate-spin" />
      <p
        style={{
          fontSize: 14,
          color: "#777",
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
