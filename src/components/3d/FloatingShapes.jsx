
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

const GalaxyStars = ({ count = 5000, color = "#fff", size = 0.002, radius = 5 }) => {
    const ref = useRef();
    const sphere = useMemo(() => random.inSphere(new Float32Array(count * 3), { radius }), [count, radius]);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={size}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

const GalaxyCore = () => {
    const ref = useRef();
    // Denser, smaller core
    const sphere = useMemo(() => random.inSphere(new Float32Array(2000 * 3), { radius: 1.2 }), []);

    useFrame((state, delta) => {
        ref.current.rotation.y -= delta / 10;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#60a5fa" // Blue-400 core
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

const Background = () => {
    const { mouse } = useThree();
    const groupRef = useRef();

    useFrame((state) => {
        // Parallax effect based on mouse position
        if (groupRef.current) {
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.05, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.05, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Far background stars */}
            <GalaxyStars count={3000} radius={10} size={0.001} color="#94a3b8" />
            {/* Main Galaxy Field */}
            <GalaxyStars count={6000} radius={4} size={0.002} color="#fff" />
            {/* Colorful Nebula/Core Accents */}
            <GalaxyCore />
        </group>
    )
}

const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 z-0 bg-black pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}> // Optimization: dpr limit
                <color attach="background" args={["#000000"]} />

                <Background />

                {/* Subtle fog for depth */}
                <fog attach="fog" args={['#000000', 1.5, 4]} />
            </Canvas>

            {/* Vignette Overlay for cinematic look */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80" />
        </div>
    );
};

export default FloatingShapes;
