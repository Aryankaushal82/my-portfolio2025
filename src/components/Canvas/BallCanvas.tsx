import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Ball = ({ icon }: { icon: string }) => {
  const [decal] = useTexture([icon]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#0078ff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: string }) => {
  // Add error handling for texture loading
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    // Check if the icon URL is valid
    const img = new Image();
    img.onerror = () => setHasError(true);
    img.src = icon;
  }, [icon]);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {!hasError && <Ball icon={icon} />}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;