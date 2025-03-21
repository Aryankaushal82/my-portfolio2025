import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, MeshDistortMaterial, Float, Text, Stars, RoundedBox } from "@react-three/drei";
import { Vector3, Mesh, Group, MathUtils } from "three";
import CanvasLoader from "./CanvasLoader";

// 3D Floating Technology Cube component with improved visuals
const TechCube = ({ position, size, color, rotationSpeed = 0.5, text }: { 
  position: [number, number, number], 
  size: number, 
  color: string,
  rotationSpeed?: number,
  text?: string
}) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * rotationSpeed;
      meshRef.current.rotation.y += 0.01 * rotationSpeed;
      
      // Enhanced floating movement
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.15;
      meshRef.current.position.x = position[0] + Math.sin(t * 0.3) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Use RoundedBox for a more modern look */}
      <RoundedBox ref={meshRef} args={[size, size, size]} radius={size/10} smoothness={4}>
        <meshPhysicalMaterial 
          color={color} 
          metalness={0.8}
          roughness={0.2} 
          emissive={color}
          emissiveIntensity={0.4}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
          transmission={0.1}
        />
      </RoundedBox>
      {text && (
        <Float floatIntensity={0.5} rotationIntensity={0.2} speed={2}>
          <Text
            position={[0, -size/1.3, 0]}
            fontSize={size * 0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.05}
          >
            {text}
          </Text>
        </Float>
      )}
    </group>
  );
};

// Enhanced floating particle system
const ParticleSystem = ({ count = 50, radius = 10 }) => {
  const particles = useRef<Group>(null);
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={particles}>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const r = Math.random() * radius;
        const x = Math.cos(angle) * r;
        const y = (Math.random() - 0.5) * radius;
        const z = Math.sin(angle) * r;
        const size = Math.random() * 0.15 + 0.05;
        
        // Varied colors for particles
        const colors = ["#38ef7d", "#11e8bb", "#8cff8c", "#0ea5e9", "#22d3ee"];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <Float key={i} speed={1 + Math.random()} rotationIntensity={Math.random()} floatIntensity={2}>
            <mesh position={[x, y, z]}>
              <sphereGeometry args={[size, 12, 12]} />
              <meshStandardMaterial 
                color={color} 
                emissive={color}
                emissiveIntensity={0.5 + Math.random() * 0.5}
                transparent
                opacity={0.6 + Math.random() * 0.4}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

// Improved glowing ring
const GlowingRing = ({ position = [0, 0, 0] as [number, number, number], radius = 2, tubeRadius = 0.02, color = "#38ef7d" }) => {
  const ringRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      const t = state.clock.getElapsedTime();
      ringRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      ringRef.current.rotation.y = Math.sin(t * 0.2) * 0.3;
      
      // Pulse effect
      const pulseFactor = 0.8 + Math.sin(t * 1.5) * 0.2;
      ringRef.current.scale.set(pulseFactor, pulseFactor, pulseFactor);
      
      // Material color intensity animation
      if (ringRef.current.material) {
        const material = ringRef.current.material as any;
        material.emissiveIntensity = 0.8 + Math.sin(t) * 0.3;
      }
    }
  });
  
  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[radius, tubeRadius, 32, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={1}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Visualization of code running on screen
const CodeVisualization = ({ position = [0, 0.3, 0.05] }) => {
  const codeRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (codeRef.current) {
      const children = codeRef.current.children;
      const t = state.clock.getElapsedTime();
      
      // Animate code lines for a typing effect
      children.forEach((child, i) => {
        const mesh = child as Mesh;
        if (mesh.scale) {
          const delay = i * 0.2;
          const pulseTime = (t + delay) % 3;
          
          if (pulseTime < 1) {
            // Type code
            mesh.scale.x = Math.min(1, pulseTime);
          } else if (pulseTime > 2.5) {
            // Delete code
            mesh.scale.x = Math.max(0, 3 - pulseTime);
          }
        }
      });
    }
  });

  return (
    <group ref={codeRef} position={position}>
      {Array.from({ length: 10 }).map((_, i) => {
        const width = 1.5 + Math.random() * 1.1;
        return (
          <mesh key={i} position={[0, 0.6 - i * 0.15, 0]} castShadow>
            <boxGeometry args={[width, 0.05, 0.01]} />
            <meshBasicMaterial color="#38ef7d" transparent opacity={0.8} />
          </mesh>
        );
      })}
    </group>
  );
};

// Keyboard with improved key animations
const Keyboard = ({ position = [0, -1.2, 0.4] }) => {
  const keyboardRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (keyboardRef.current) {
      const t = state.clock.getElapsedTime();
      const children = keyboardRef.current.children;
      
      // Simulate typing by randomly pressing keys
      children.forEach((child, i) => {
        if (Math.random() > 0.95) {
          const mesh = child as Mesh;
          mesh.position.y = -1.15;
          setTimeout(() => {
            if (mesh) mesh.position.y = -1.14;
          }, 100);
        }
      });
    }
  });

  return (
    <group ref={keyboardRef} position={position}>
      {/* Base keyboard */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Keys */}
      {Array.from({ length: 4 }).map((_, row) => (
        Array.from({ length: 10 }).map((_, col) => (
          <mesh 
            key={`key-${row}-${col}`} 
            position={[-0.9 + col * 0.2, -1.14, 0.1 + row * 0.2]} 
            receiveShadow 
          >
            <boxGeometry args={[0.15, 0.02, 0.15]} />
            <meshStandardMaterial 
              color={Math.random() > 0.9 ? "#38ef7d" : "#333333"} 
              emissive={Math.random() > 0.9 ? "#38ef7d" : "#000000"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))
      ))}
      
      {/* Enhanced touchpad with subtle glow */}
      <mesh position={[0, -1.15, 0.65]} receiveShadow castShadow>
        <boxGeometry args={[0.8, 0.02, 0.3]} />
        <meshPhongMaterial 
          color="#444444" 
          shininess={100}
          emissive="#38ef7d"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
};

const ModernComputer = ({ isMobile }: { isMobile: boolean }) => {
  const computerRef = useRef<Group>(null);
  const screenRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (computerRef.current) {
      // Enhanced floating animation
      const t = state.clock.getElapsedTime();
      computerRef.current.position.y = Math.sin(t * 0.5) * 0.1;
      
      // More dynamic subtle rotation
      computerRef.current.rotation.y = Math.sin(t * 0.2) * 0.08;
      computerRef.current.rotation.x = Math.sin(t * 0.3) * 0.02;
    }
    
    if (screenRef.current) {
      // Enhanced glowing effect for the screen
      const material = screenRef.current.material as any;
      if (material.emissiveIntensity) {
        const t = state.clock.getElapsedTime();
        material.emissiveIntensity = 0.5 + Math.sin(t * 2) * 0.2;
        
        // Color shift effect from green to cyan and back
        const hue = (t * 0.05) % 1;
        if (hue < 0.5) {
          // Shift from green to cyan
          const blend = hue * 2; // 0 to 1
          material.emissive.set(`rgb(56, ${239 - blend * 100}, ${125 + blend * 130})`);
        } else {
          // Shift back from cyan to green
          const blend = (hue - 0.5) * 2; // 0 to 1
          material.emissive.set(`rgb(56, ${139 + blend * 100}, ${255 - blend * 130})`);
        }
      }
    }
  });

  return (
    <group 
      ref={computerRef}
      position={[0, isMobile ? -1.5 : -1, 0]} 
      scale={isMobile ? 0.5 : 0.75}
    >
      {/* Enhanced lighting */}
      <hemisphereLight intensity={0.2} groundColor="#121212" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#38ef7d" />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#38ef7d" />
      <pointLight position={[-5, 0, 0]} intensity={0.3} color="#0ea5e9" />

      {/* Base/Stand with improved appearance */}
      <RoundedBox
        position={[0, -1.5, 0]} 
        args={[3, 0.2, 1.5]}
        radius={0.08}
        smoothness={4}
        receiveShadow 
        castShadow
      >
        <meshPhysicalMaterial 
          color="#222222" 
          metalness={0.8} 
          roughness={0.2}
          clearcoat={0.5}
          reflectivity={0.5}
        />
      </RoundedBox>
      
      {/* Stand neck with improved appearance */}
      <mesh position={[0, -0.8, -0.2]} receiveShadow castShadow>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 32]} />
        <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Monitor frame with rounded corners */}
      <RoundedBox 
        position={[0, 0.3, 0]} 
        args={[3, 1.8, 0.1]}
        radius={0.05}
        smoothness={4}
        receiveShadow 
        castShadow
      >
        <meshPhysicalMaterial 
          color="#111111" 
          metalness={0.7} 
          roughness={0.2}
          clearcoat={0.3}
        />
      </RoundedBox>
      
      {/* Screen with improved visual effects */}
      <RoundedBox
        ref={screenRef}
        position={[0, 0.3, 0.02]} 
        args={[2.8, 1.6, 0.05]}
        radius={0.03}
        smoothness={4}
        receiveShadow 
        castShadow
      >
        <meshPhongMaterial 
          color="#222222" 
          emissive="#38ef7d"
          emissiveIntensity={0.5}
          shininess={100}
        />
      </RoundedBox>
      
      {/* Animated code on screen */}
      <CodeVisualization />
      
      {/* Enhanced keyboard with key animations */}
      <Keyboard />
      
      {/* Add brand logo on the base - fixed to not use custom font */}
      <Text
        position={[0, -1.48, 0.8]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.15}
        color="#38ef7d"
        anchorX="center"
        anchorY="middle"
      >
        TECHPRO
      </Text>
      
      {/* Add power LED */}
      <mesh position={[1.4, -1.48, 0.7]} receiveShadow castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color="#38ef7d" />
      </mesh>
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
      className="w-full h-full absolute inset-0"
    >
      <color attach="background" args={['#090b10']} />
      <fog attach="fog" args={['#090b10', 10, 20]} />
      
      {/* Add subtle stars in background */}
      <Stars radius={50} depth={50} count={1000} factor={4} fade />
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.4}
        />
        
        {/* Main computer model */}
        <ModernComputer isMobile={isMobile} />
        
        {/* Add more floating tech cubes with different technologies */}
        <TechCube position={[-4, 0.5, -3]} size={0.7} color="#38ef7d" rotationSpeed={0.7} text="React" />
        <TechCube position={[4, 0, -2]} size={0.6} color="#0ea5e9" rotationSpeed={0.5} text="TypeScript" />
        <TechCube position={[-3, -1, -1]} size={0.55} color="#8b5cf6" rotationSpeed={0.6} text="Node.js" />
        <TechCube position={[3, 1.5, -3]} size={0.65} color="#f97316" rotationSpeed={0.45} text="JavaScript" />
        <TechCube position={[-2, 2, -4]} size={0.5} color="#ec4899" rotationSpeed={0.55} text="GraphQL" />
        
        {/* Enhanced particle system */}
        <ParticleSystem count={isMobile ? 40 : 80} radius={isMobile ? 8 : 12} />
        
        {/* Improved glowing rings with varied colors */}
        <GlowingRing position={[0, 0, -5]} radius={3} tubeRadius={0.04} color="#38ef7d" />
        <GlowingRing position={[0, 0, -8]} radius={5} tubeRadius={0.03} color="#22d3ee" />
        <GlowingRing position={[0, 0, -11]} radius={7} tubeRadius={0.02} color="#a5f3fc" />
        <GlowingRing position={[0, 0, -14]} radius={9} tubeRadius={0.01} color="#8cff8c" />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;