
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  // Mock 3D model handling since we don't have actual models
  // In a real project, you would use useGLTF to load your model
  /*
  const computer = useGLTF("./desktop_pc/scene.gltf");
  */

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* Simple 3D object instead of an actual model */}
      <group position={[0, -1.5, 0]} scale={isMobile ? 0.5 : 0.75}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[2, 0.1, 1]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
        <mesh position={[0, 0.7, 0]} receiveShadow castShadow>
          <boxGeometry args={[1.8, 1.2, 0.1]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
        <mesh position={[0, 0.7, -0.2]} receiveShadow castShadow>
          <boxGeometry args={[1.6, 1, 0.1]} />
          <meshStandardMaterial color="#0078ff" />
        </mesh>
        <mesh position={[0, -0.3, -0.2]} receiveShadow castShadow>
          <boxGeometry args={[1.2, 0.1, 0.6]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for screen size changes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
