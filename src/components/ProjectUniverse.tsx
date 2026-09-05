"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { projects, Project } from "../data/projects";

function ProjectNode({ project, position, onClick }: { project: Project, position: [number, number, number], onClick: (p: Project) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={position}>
      <mesh 
        ref={meshRef} 
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); document.body.style.cursor = 'default'; }}
        onClick={(e) => { e.stopPropagation(); onClick(project); }}
      >
        <boxGeometry args={[3, 4, 0.5]} />
        <meshStandardMaterial 
          color={hovered ? "#4F46E5" : "#0052FF"} 
          metalness={0.8} 
          roughness={0.2}
          transparent
          opacity={0.8}
        />
        
        {/* Project Title overlay */}
        <Html position={[0, 0, 0.26]} transform distanceFactor={5} pointerEvents="none">
          <div className="w-48 text-center bg-white/10 backdrop-blur-md p-4 border border-white/20 rounded text-white font-sans">
            <p className="text-xs font-bold tracking-widest uppercase mb-2 opacity-80">{project.category}</p>
            <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

export function ProjectUniverse() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Distribute nodes in a circle or semi-random
  const positions: [number, number, number][] = [
    [-4, 1, 0],
    [0, 2, -2],
    [4, 0, -1],
    [-2, -3, -3],
    [3, -2, 1]
  ];

  return (
    <section className="relative w-full h-[100vh] bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Project Universe</h2>
        <p className="mt-4 text-white/50 uppercase tracking-widest text-sm">Select an object to explore</p>
      </div>

      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
          
          {/* Starfield background */}
          <points>
            <bufferGeometry>
              <bufferAttribute 
                attach="attributes-position"
                args={[new Float32Array(1500).map(() => (Math.random() - 0.5) * 40), 3]}
              />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#8B5CF6" transparent opacity={0.5} />
          </points>

          {projects.map((proj, i) => (
            <ProjectNode 
              key={proj.id} 
              project={proj} 
              position={positions[i % positions.length]} 
              onClick={setActiveProject} 
            />
          ))}
        </Canvas>
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 z-50 bg-background flex flex-col overflow-y-auto"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Close button */}
            <button 
              className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-muted z-50 hover:bg-muted transition-colors"
              onClick={() => setActiveProject(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {/* Content */}
            <div className="max-w-5xl mx-auto w-full py-24 px-8">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">{activeProject.category}</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-8 text-foreground">{activeProject.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                <div className="md:col-span-2 space-y-12">
                  <section>
                    <h3 className="text-xl font-bold mb-4 border-b border-muted pb-2">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{activeProject.challenge}</p>
                  </section>
                  
                  <section>
                    <h3 className="text-xl font-bold mb-4 border-b border-muted pb-2">Analysis & Methodology</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{activeProject.methodology}</p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {activeProject.analysis.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold mb-4 border-b border-muted pb-2">Solution & Impact</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{activeProject.solution}</p>
                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
                      <ul className="space-y-4">
                        {activeProject.impact.map((imp, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-3">✦</span>
                            <span className="text-foreground font-medium">{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  <div className="bg-card-bg p-6 rounded-xl border border-muted shadow-sm">
                    <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Key Data Inputs</h4>
                    <ul className="space-y-3">
                      {activeProject.data.map((d, i) => (
                        <li key={i} className="text-sm font-medium border-l-2 border-primary pl-3 py-1">{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-card-bg p-6 rounded-xl border border-muted shadow-sm">
                    <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
