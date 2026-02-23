import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const NODE_COUNT = 60;
const CONNECTION_DISTANCE = 2.8;

const NeuralNodes = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const nodes = useMemo(() => {
    const arr: { pos: THREE.Vector3; vel: THREE.Vector3; phase: number }[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005
        ),
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, []);

  const lineGeometry = useMemo(() => {
    const maxLines = NODE_COUNT * NODE_COUNT;
    const positions = new Float32Array(maxLines * 6);
    const colors = new Float32Array(maxLines * 6);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Update nodes
    nodes.forEach((node, i) => {
      node.pos.add(node.vel);
      // Soft boundary
      ["x", "y", "z"].forEach((axis) => {
        const a = axis as "x" | "y" | "z";
        if (Math.abs(node.pos[a]) > 3.5) node.vel[a] *= -1;
      });

      const pulse = 0.03 + Math.sin(t * 2 + node.phase) * 0.015;
      dummy.position.copy(node.pos);
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);

      // Color based on position
      const color = new THREE.Color();
      color.setHSL(0.52 + Math.sin(t * 0.5 + node.phase) * 0.08, 0.9, 0.6);
      meshRef.current?.setColorAt(i, color);
    });

    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true;
      if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    }

    // Update connections
    const posAttr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
    const colAttr = lineGeometry.getAttribute("color") as THREE.BufferAttribute;
    let lineIdx = 0;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].pos.distanceTo(nodes[j].pos);
        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const idx = lineIdx * 6;

          posAttr.array[idx] = nodes[i].pos.x;
          posAttr.array[idx + 1] = nodes[i].pos.y;
          posAttr.array[idx + 2] = nodes[i].pos.z;
          posAttr.array[idx + 3] = nodes[j].pos.x;
          posAttr.array[idx + 4] = nodes[j].pos.y;
          posAttr.array[idx + 5] = nodes[j].pos.z;

          // Pulse color along connections
          const pulse = (Math.sin(t * 3 + i * 0.5) * 0.5 + 0.5) * alpha;
          const c1 = new THREE.Color().setHSL(0.52, 0.8, 0.4 + pulse * 0.3);
          const c2 = new THREE.Color().setHSL(0.08, 0.9, 0.5 + pulse * 0.2);

          colAttr.array[idx] = c1.r;
          colAttr.array[idx + 1] = c1.g;
          colAttr.array[idx + 2] = c1.b;
          colAttr.array[idx + 3] = c2.r;
          colAttr.array[idx + 4] = c2.g;
          colAttr.array[idx + 5] = c2.b;

          lineIdx++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx * 2);
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <group rotation={[0.3, 0, 0.1]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial transparent opacity={0.9} toneMapped={false} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.4} toneMapped={false} />
      </lineSegments>
    </group>
  );
};

const RotatingGroup = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });
  return <group ref={groupRef}>{children}</group>;
};

export const NeuralNetwork3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <RotatingGroup>
          <NeuralNodes />
        </RotatingGroup>
      </Canvas>
    </div>
  );
};
