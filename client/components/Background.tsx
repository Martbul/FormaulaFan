"use client"; // Ensure client-side rendering

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Background = ({ className }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create a scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background to dark

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    const mountElement = mountRef.current;
    if (mountElement) {
      mountElement.appendChild(renderer.domElement);
    }

    // Create lights
    const createLights = () => {
      const numLights = 200; // Increase the number of lights
      for (let i = 0; i < numLights; i++) {
        const color = new THREE.Color(
          Math.random(),
          Math.random(),
          Math.random(),
        );
        const intensity = Math.random() * 2 + 1; // Random intensity between 1 and 3
        const distance = Math.random() * 20 + 10; // Random distance between 10 and 30

        const light = new THREE.PointLight(color, intensity, distance);
        light.position.set(
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
        );
        scene.add(light);
      }
    };
    createLights();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update light positions to simulate speed
      scene.children.forEach((child) => {
        if (child instanceof THREE.PointLight) {
          child.position.x += (Math.random() - 0.5) * 0.5;
          child.position.y += (Math.random() - 0.5) * 0.5;
          child.position.z += (Math.random() - 0.5) * 0.5;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      if (mountElement) {
        if (mountElement.contains(renderer.domElement)) {
          mountElement.removeChild(renderer.domElement);
        }
      }
      // Clean up Three.js objects
      renderer.dispose();
      scene.children.forEach((child) => {
        if (child instanceof THREE.PointLight) {
          scene.remove(child);
        }
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
      }}
    />
  );
};

export default Background;
