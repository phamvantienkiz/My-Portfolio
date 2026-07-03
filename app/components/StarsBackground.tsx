"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import type { Points as PointsType } from "three";

// Custom mathematical sphere points generator to avoid 'maath' dependencies
function generateSpherePoints(numPoints: number, radius: number): Float32Array {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    const u = Math.random();
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(u);

    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);     // X
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
    points[i * 3 + 2] = r * Math.cos(phi);                  // Z
  }
  return points;
}

export const StarBackground = (props: any) => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() => generateSpherePoints(5000, 1.2));

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
