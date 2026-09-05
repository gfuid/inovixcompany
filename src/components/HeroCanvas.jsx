import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Constellation Geometry
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const cyanColor = new THREE.Color("#00D4FF");
    const indigoColor = new THREE.Color("#6366F1");
    const blueColor = new THREE.Color("#3B82F6");

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical / Wave distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const radius = 25 + Math.random() * 55;

      positions[i * 3] = Math.cos(theta) * radius + (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (v - 0.5) * 75 + Math.sin(theta * 2) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 55;

      // Gradient color blend
      const mixedColor = i % 3 === 0 ? cyanColor : i % 3 === 1 ? indigoColor : blueColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      scales[i] = 1.0 + Math.random() * 2.2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Particle Shader Material
    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connecting Wireframe Torus Ring
    const torusGeo = new THREE.TorusGeometry(38, 1.2, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    // Mouse Tracking with smooth spring easing
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      camera.position.x = currentX * 12;
      camera.position.y = -currentY * 10;
      camera.lookAt(0, 0, 0);

      // Rotate particle cloud and torus
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1;

      torus.rotation.z = elapsedTime * 0.08;
      torus.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
}
