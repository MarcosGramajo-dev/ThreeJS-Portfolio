import Eclipse from '../assets/eclipse.svg';
import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, PointMaterial, PerspectiveCamera } from '@react-three/drei';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { BufferGeometry, TextureLoader, Color, Float32BufferAttribute, Box3, Vector3 } from 'three';

function Model() {
  const geometry = useLoader(PLYLoader, '/models/form/model.ply');
  const texture = useLoader(TextureLoader, '/textures/circle.png');
  const meshRef = useRef();

  useEffect(() => {
    if (geometry) {
      const boundingBox = new Box3().setFromBufferAttribute(geometry.attributes.position);

      const center = new Vector3();
      boundingBox.getCenter(center);

      geometry.translate(-center.x, -center.y, -center.z);

      const colors = [];
      const colorOptions = ['#FFFFFF', '#ADD8E6', '#1E90FF', '#87CEEB'];
      const color = new Color();

      for (let i = 0; i < geometry.attributes.position.count; i++) {
        const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        color.set(randomColor);
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute('color', new Float32BufferAttribute(colors, 3));
    }
  }, [geometry]);

  useFrame(() => {
    meshRef.current.rotation.z += 0.0002;
  });

  return (
    <points ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial
        map={texture}
        size={0.05}
        vertexColors={true}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

function Nebula() {
  const pointsRef = useRef();
  const count = 4000; // Número de partículas
  const positions = [];
  const colors = [];
  const opacities = [];

  const color = new Color("lightblue"); // Color base de la nebulosa

  for (let i = 0; i < count; i++) {
    const r = Math.random() * 70; // Radio máximo
    const theta = Math.random() * 2 * Math.PI; // Ángulo en el plano X-Z
    const phi = Math.acos(Math.random() * 2 - 1); // Ángulo en el eje Y

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions.push(x, y, z);

    color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.6);
    colors.push(color.r, color.g, color.b);

    opacities.push(1 - r / 70);
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));

  useFrame(() => {
    pointsRef.current.rotation.y += 0.0001; // Rotación sutil
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <PointMaterial
        size={0.001}
        vertexColors={true}
        transparent={true}
        opacity={1}
        sizeAttenuation={true}
      />
    </points>
  );
}

function CameraHandler({ cameraState }) {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      const currentPosition = cameraRef.current.position;
      const targetPosition = new Vector3(...cameraState.position);

      // Incrementar o decrementar cada coordenada hacia el objetivo
      if (Math.abs(currentPosition.x - targetPosition.x) > 0.01) {
        currentPosition.x +=
          currentPosition.x < targetPosition.x ? 0.1 : -0.1;
      }
      if (Math.abs(currentPosition.y - targetPosition.y) > 0.01) {
        currentPosition.y +=
          currentPosition.y < targetPosition.y ? 0.1 : -0.1;
      }
      if (Math.abs(currentPosition.z - targetPosition.z) > 0.01) {
        currentPosition.z +=
          currentPosition.z < targetPosition.z ? 0.1 : -0.1;
      }

      // Actualizar la posición de la cámara
      cameraRef.current.position.copy(currentPosition);

      // Actualizar el objetivo de la cámara
      const targetLookAt = new Vector3(...cameraState.target);
      cameraRef.current.lookAt(targetLookAt);
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={cameraState.position}
      fov={75}
    />
  );
}



function ModelGeometricShapes({ cameraState }) {

  return (
    <div className="w-full h-full slide-in-bck-center">
      <Canvas
        style={{ height: "100%", width: "100%", background: 'radial-gradient(circle, #000, #030D1E)' }}
      >

        <CameraHandler cameraState={cameraState} />

        <Suspense>
          <Model />
          <Nebula />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
        <EffectComposer>
          <Bloom
            intensity={2}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
export default ModelGeometricShapes;
