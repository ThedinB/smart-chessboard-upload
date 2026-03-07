import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Scene3D({ count = 150 }) {
    const mesh = useRef();

    // Generating random positions for particles
    const [positions, speeds] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const speeds = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z
            speeds[i] = 0.01 + Math.random() * 0.02;
        }
        return [positions, speeds];
    }, [count]);

    const uniforms = useMemo(() => ({
        color: { value: new THREE.Color('#3b82f6') }
    }), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = time * 0.05;
            mesh.current.rotation.x = time * 0.02;

            // Gentle bobbing effect for the whole system
            mesh.current.position.y = Math.sin(time * 0.5) * 0.5;
        }

        // Animate individual points if needed using attributes, but simple rotation is elegant enough for now
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#60a5fa"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
