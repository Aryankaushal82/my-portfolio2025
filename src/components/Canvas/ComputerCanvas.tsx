
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, MeshDistortMaterial, Float } from "@react-three/drei";
import { Vector3, Mesh, Group, MathUtils } from "three";
import CanvasLoader from "./CanvasLoader";

const ModernComputer = ({ isMobile }: { isMobile: boolean }) => {
  const computerRef = useRef<Group>(null);
  const screenRef = useRef<Mesh>(null);
  const keyboardRef = useRef<Mesh>(null);
  const baseRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (computerRef.current) {
      // Gentle floating animation
      computerRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      
      // Subtle rotation
      computerRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05;
    }
    
    if (screenRef.current) {
      // Glowing effect for the screen
      const material = screenRef.current.material as any;
      if (material.emissiveIntensity) {
        material.emissiveIntensity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
      }
    }
  });

  return (
    <group 
      ref={computerRef}
      position={[0, isMobile ? -1.5 : -1, 0]} 
      scale={isMobile ? 0.5 : 0.75}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#38ef7d" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#38ef7d" />

      {/* Base/Stand */}
      <mesh 
        ref={baseRef}
        position={[0, -1.5, 0]} 
        receiveShadow 
        castShadow
      >
        <boxGeometry args={[3, 0.2, 1.5]} />
        <meshStandardMaterial color="#222222" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Stand neck */}
      <mesh position={[0, -0.8, -0.2]} receiveShadow castShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
        <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Monitor frame */}
      <mesh position={[0, 0.3, 0]} receiveShadow castShadow>
        <boxGeometry args={[3, 1.8, 0.1]} />
        <meshStandardMaterial color="#111111" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Screen */}
      <mesh 
        ref={screenRef}
        position={[0, 0.3, 0.02]} 
        receiveShadow 
        castShadow
      >
        <boxGeometry args={[2.8, 1.6, 0.05]} />
        <meshPhongMaterial 
          color="#222222" 
          emissive="#38ef7d"
          emissiveIntensity={0.5}
          shininess={100}
        />
      </mesh>
      
      {/* Screen content - code lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, 0.6 - i * 0.2, 0.06]} receiveShadow castShadow>
          <boxGeometry args={[2 * Math.random() + 0.4, 0.05, 0.01]} />
          <meshBasicMaterial color="#38ef7d" transparent opacity={0.8} />
        </mesh>
      ))}
      
      {/* Keyboard */}
      <mesh 
        ref={keyboardRef}
        position={[0, -1.2, 0.4]} 
        receiveShadow 
        castShadow
      >
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Keyboard keys - using instanced mesh would be more efficient */}
      {Array.from({ length: 4 }).map((_, row) => (
        Array.from({ length: 10 }).map((_, col) => (
          <mesh 
            key={`key-${row}-${col}`} 
            position={[-0.9 + col * 0.2, -1.14, 0.1 + row * 0.2]} 
            receiveShadow 
            castShadow
          >
            <boxGeometry args={[0.12, 0.02, 0.12]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
        ))
      ))}
      
      {/* Laptop touchpad */}
      <mesh position={[0, -1.15, 0.65]} receiveShadow castShadow>
        <boxGeometry args={[0.8, 0.02, 0.3]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Floating code particles around the computer */}
      {Array.from({ length: 15 }).map((_, i) => {
        const size = Math.random() * 0.1 + 0.05;
        const angle = (i / 15) * Math.PI * 2;
        const radius = 2 + Math.random() * 1;
        
        return (
          <Float key={i} speed={3} rotationIntensity={2} floatIntensity={2}>
            <mesh 
              position={[
                Math.sin(angle) * radius, 
                Math.random() * 2 - 1, 
                Math.cos(angle) * radius
              ]}
            >
              <icosahedronGeometry args={[size, 0]} />
              <meshPhongMaterial 
                color="#38ef7d" 
                emissive="#38ef7d"
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
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
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <color attach="background" args={['#121212']} />
      <fog attach="fog" args={['#121212', 10, 20]} />
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ModernComputer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
