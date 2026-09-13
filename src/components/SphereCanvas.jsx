import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const SphereCanvas = ({ className = "" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 180;
    const height = container.clientHeight || 180;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 3.6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create a ribbed spiral sphere geometry matching the reference image orb
    const baseGeometry = new THREE.SphereGeometry(1.15, 128, 128);
    const positionAttribute = baseGeometry.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      const u = (Math.atan2(vertex.z, vertex.x) / (Math.PI * 2)) + 0.5;
      const v = (Math.asin(Math.max(-1, Math.min(1, vertex.y / 1.15))) / Math.PI) + 0.5;
      
      // Fine spiral ribbed displacement
      const rib = Math.sin((u * 14.0 + v * 5.0) * Math.PI * 2.0);
      const displacement = 1.0 + 0.12 * rib;
      
      vertex.multiplyScalar(displacement);
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    baseGeometry.computeVertexNormals();
    
    // Iridescent physical material with high clearcoat
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xc8c3eb,
      emissive: 0x1f1938,
      roughness: 0.18,
      metalness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      sheen: 1.0,
      sheenColor: 0xffaacc,
    });

    const mesh = new THREE.Mesh(baseGeometry, material);
    scene.add(mesh);

    // Dynamic colorful lighting for iridescent effect
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff6ea7, 4, 10);
    pointLight1.position.set(2, 3, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x5eead4, 4, 10);
    pointLight2.position.set(-3, -2, 2);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xfbbd61, 3, 10);
    pointLight3.position.set(0, -3, -1);
    scene.add(pointLight3);

    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.8;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.8;
    };

    container.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      mesh.rotation.x += 0.008;
      mesh.rotation.y += 0.012;
      mesh.rotation.z += (mouseY - mesh.rotation.z) * 0.05;

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      baseGeometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full flex items-center justify-center overflow-hidden cursor-pointer ${className}`}
    />
  );
};

export default SphereCanvas;
