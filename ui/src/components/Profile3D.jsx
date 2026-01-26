import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import './Profile3D.css';

function AnimatedSphere() {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    });

    return (
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#00f3ff"
                attach="material"
                distort={0.3}
                speed={1.5}
                roughness={0}
            />
        </Sphere>
    );
}

const Profile3D = () => {
    return (
        <div className="profile-3d-container">
            <motion.div
                className="profile-wrapper"
                initial={{ scale: 0, rotateY: 180 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1.5, type: 'spring' }}
            >
                {/* 3D Canvas Background */}
                <div className="canvas-bg">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <AnimatedSphere />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>

                {/* Profile Photo with Holographic Effect */}
                <div className="profile-image-wrapper holographic">
                    <div className="glow-ring"></div>
                    <img
                        src="/profile.jpg"
                        alt="Keerthieswaran"
                        className="profile-image"
                    />
                    <div className="scan-line"></div>
                </div>

                {/* Glitch Name */}
                <motion.h1
                    className="profile-name glitch"
                    data-text="KEERTHIESWARAN"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    KEERTHIESWARAN
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="profile-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <span className="neon-glow">{'<'}</span>
                    AI Engineer | SAP BTP Specialist | Data Architect
                    <span className="neon-glow">{'/>'}</span>
                </motion.p>

                {/* Stats Display */}
                <motion.div
                    className="stats-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="stat-item">
                        <span className="stat-value neon-glow">10+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value neon-glow-magenta">4+</span>
                        <span className="stat-label">Companies</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value neon-glow">3+</span>
                        <span className="stat-label">Certifications</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Profile3D;
