import React, { useRef, useMemo, useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { WebGLFallback } from './WebGLFallback';

// Error Boundary for WebGL initialization safety
interface Props {
  children: ReactNode;
  fallback: ReactNode;
}
interface State {
  hasError: boolean;
}
class WebGLErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('ThreeJS WebGL context encountered an issue:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Interactive Multi-Ring Gyroscopic Geometric Core
const GeometricCore: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const middleRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  // Satellites
  const sat1Ref = useRef<THREE.Mesh>(null);
  const sat2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Smooth pointer parallax with lerp
    if (groupRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (-state.pointer.y * Math.PI) / 8;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    }

    // Continuous orbital rotations
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.25;
      outerRingRef.current.rotation.x += delta * 0.15;
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.y -= delta * 0.35;
      middleRingRef.current.rotation.z += delta * 0.2;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x += delta * 0.4;
      innerRingRef.current.rotation.y += delta * 0.3;
    }
    if (icosahedronRef.current && wireframeRef.current) {
      icosahedronRef.current.rotation.y += delta * 0.2;
      icosahedronRef.current.rotation.x += delta * 0.15;
      wireframeRef.current.rotation.y += delta * 0.2;
      wireframeRef.current.rotation.x += delta * 0.15;

      // Subtle breathing scale pulsation
      const scale = 1 + Math.sin(t * 1.5) * 0.04;
      icosahedronRef.current.scale.set(scale, scale, scale);
      wireframeRef.current.scale.set(scale, scale, scale);
    }

    // Satellites orbital motion
    if (sat1Ref.current) {
      sat1Ref.current.position.x = Math.cos(t * 0.8) * 2.8;
      sat1Ref.current.position.z = Math.sin(t * 0.8) * 2.8;
      sat1Ref.current.position.y = Math.sin(t * 1.2) * 0.8;
    }
    if (sat2Ref.current) {
      sat2Ref.current.position.x = Math.sin(-t * 0.7) * 2.4;
      sat2Ref.current.position.y = Math.cos(-t * 0.7) * 2.4;
      sat2Ref.current.position.z = Math.cos(t * 0.9) * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Solid Polyhedron */}
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshStandardMaterial
          color="#0d1117"
          roughness={0.2}
          metalness={0.9}
          emissive="#091410"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Central High-Tech Wireframe */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.02, 1]} />
        <meshBasicMaterial
          color="#ccff00"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Gyroscopic Ring (Cyan Accent) */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.45, 0.015, 16, 80]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Middle Gyroscopic Ring (Subtle Graphite) */}
      <mesh ref={middleRingRef} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[1.85, 0.02, 16, 90]} />
        <meshStandardMaterial
          color="#334155"
          emissive="#1e293b"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Gyroscopic Ring (Electric Lime Accent) */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.022, 16, 100]} />
        <meshStandardMaterial
          color="#ccff00"
          emissive="#ccff00"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Satellite Node 1 (Lime) */}
      <mesh ref={sat1Ref}>
        <octahedronGeometry args={[0.09, 0]} />
        <meshStandardMaterial
          color="#ccff00"
          emissive="#ccff00"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Satellite Node 2 (Cyan) */}
      <mesh ref={sat2Ref}>
        <octahedronGeometry args={[0.07, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={1.2}
        />
      </mesh>
    </group>
  );
};

// Restrained, High-Performance Particle Field
const Particles: React.FC = () => {
  const count = 120;
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const radius = THREE.MathUtils.randFloat(2.5, 6.0);

      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#a3e635"
        transparent
        opacity={0.45}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const HeroCanvas: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check mobile screen
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLAvailable(false);
      }
    } catch {
      setWebGLAvailable(false);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  if (reducedMotion || !webGLAvailable) {
    return <WebGLFallback />;
  }

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden" 
      aria-hidden="true"
    >
      <WebGLErrorBoundary fallback={<WebGLFallback />}>
        <Canvas
          camera={{ 
            position: [0, 0, isMobile ? 8.4 : 6.2], 
            fov: isMobile ? 46 : 42 
          }}
          dpr={[1, 1.75]} // Cap DPR at 1.75 for battery & frame stability
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          {/* Controlled Professional Studio Lighting */}
          <ambientLight intensity={0.8} />
          
          {/* Key White Light */}
          <directionalLight position={[2, 4, 4]} intensity={1.5} color="#f8fafc" />
          
          {/* Electric Lime Accent Rim Light */}
          <pointLight position={[3.5, 3, 2]} intensity={2.6} color="#ccff00" distance={10} />
          
          {/* Cyan Fill Light */}
          <pointLight position={[-3.5, -2, -1]} intensity={1.8} color="#00f0ff" distance={8} />

          {/* Floated Interactive Geometric Core */}
          <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
            <GeometricCore />
          </Float>

          {/* Restrained Constellation Particle Cloud */}
          <Particles />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};
