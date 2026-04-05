'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generates points on a sphere
const generateParticles = (count: number, radius: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        // Random spherical distribution
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * radius;

        const sinPhi = Math.sin(phi);
        positions[i * 3] = r * sinPhi * Math.cos(theta);
        positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
};

const NeuralNetwork = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.Group>(null);
    
    // Core parameters
    const particleCount = 1500;
    const sphereRadius = 2.5;

    // Memoize the positions to prevent re-generation
    const positions = useMemo(() => generateParticles(particleCount, sphereRadius), [particleCount, sphereRadius]);

    // Animate the entire network rotation
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.15;
            pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
        }
        if (linesRef.current) {
            linesRef.current.rotation.y = time * 0.15;
            linesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
        }
    });

    return (
        <group>
            {/* The primary bright particle cluster */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <PointMaterial
                    transparent
                    color="#0052bf" // Match the brand's primary color
                    size={0.035}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* A subtle geometric core wireframe to establish structure */}
            <group ref={linesRef}>
                <mesh>
                    <icosahedronGeometry args={[1.5, 2]} />
                    <meshBasicMaterial 
                        color="#ffffff" 
                        wireframe 
                        transparent 
                        opacity={0.1}
                    />
                </mesh>
                <mesh>
                    <icosahedronGeometry args={[2.2, 1]} />
                    <meshBasicMaterial 
                        color="#0052bf" 
                        wireframe 
                        transparent 
                        opacity={0.05}
                    />
                </mesh>
            </group>
        </group>
    );
};

export default function NeuralSphere() {
    return (
        <div className="w-full h-full min-h-[400px] md:min-h-[600px] relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#0052bf" />
                
                <Float
                    speed={2} // Animation speed
                    rotationIntensity={0.5} // XYZ rotation intensity
                    floatIntensity={1} // Up/down float intensity
                >
                    <NeuralNetwork />
                </Float>
                
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
