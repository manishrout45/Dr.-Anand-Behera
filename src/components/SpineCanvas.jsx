import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import SpineModel, { makeSpineCurve } from "./SpineModel.jsx";
import Marker from "./Marker.jsx";

import { STAGES, getActiveStageIndex } from "../spineData.js";

/* ===============================================================
   ROTATION CALCULATION
================================================================ */

function rotationForProgress(progress) {
  const safeProgress = THREE.MathUtils.clamp(
    Number.isFinite(progress) ? progress : 0,
    0,
    1
  );

  const idx = getActiveStageIndex(safeProgress);
  const stage = STAGES[idx];

  if (!stage) {
    return 0;
  }

  const [start, end] = stage.range;

  const localT =
    end > start
      ? (safeProgress - start) / (end - start)
      : 0;

  const [rStart, rEnd] = stage.rotationDeg;

  const deg = THREE.MathUtils.lerp(
    rStart,
    rEnd,
    THREE.MathUtils.clamp(localT, 0, 1)
  );

  return THREE.MathUtils.degToRad(deg);
}

/* ===============================================================
   ROTATING SPINE RIG
================================================================ */

function RotatingRig({ progress }) {
  const group = useRef(null);

  /*
   * Create ONE stable curve.
   * Never recreate this during scrolling.
   */
  const curve = useRef(makeSpineCurve()).current;

  const safeProgress = THREE.MathUtils.clamp(
    Number.isFinite(progress) ? progress : 0,
    0,
    1
  );

  const activeIdx = getActiveStageIndex(safeProgress);

  useFrame((_, delta) => {
    if (!group.current) return;

    const targetRotation = rotationForProgress(safeProgress);

    /*
     * Delta-based damping.
     * This remains smooth even if the browser temporarily
     * slows down or resumes after being idle.
     */
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetRotation,
      4,
      delta
    );

    /*
     * Make sure the rig remains visible.
     */
    group.current.visible = true;
  });

  return (
    <group
      ref={group}
      scale={0.8}
      position={[0, 0, 0]}
      visible
    >
      {/* =====================================================
          SPINE
      ===================================================== */}

      <SpineModel />

      {/* =====================================================
          MARKERS
      ===================================================== */}

      {STAGES.map((stage, sIdx) =>
        stage.markers.map((marker, mIdx) => (
          <Marker
            key={`${stage.id}-${marker.title}-${mIdx}`}
            curve={curve}
            t={marker.t}
            side={marker.side}
            title={marker.title}
            note={marker.note}
            active={sIdx === activeIdx}
            scale={0.68 + marker.t * 0.55}
            rightOffset={0.18}
          />
        ))
      )}
    </group>
  );
}

/* ===============================================================
   SPINE CANVAS
================================================================ */

export default function SpineCanvas({ progress = 0 }) {
  /*
   * Changing this key completely recreates the WebGL Canvas.
   * This is our recovery mechanism when the browser loses
   * the WebGL context.
   */
  const [canvasKey, setCanvasKey] = useState(0);

  /*
   * Prevent multiple remounts from happening at once.
   */
  const recoveringRef = useRef(false);

  /*
   * Keep the latest progress available for recovery.
   */
  const progressRef = useRef(progress);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  /*
   * If the browser loses WebGL context while the page is
   * inactive, give the browser a moment to restore resources
   * and then recreate the Canvas.
   */
  const handleContextLost = (event) => {
    /*
     * Prevent the browser's default context handling from
     * interfering with our recovery logic.
     */
    event.preventDefault();

    console.warn(
      "Spine 3D: WebGL context lost. Preparing recovery..."
    );

    if (recoveringRef.current) {
      return;
    }

    recoveringRef.current = true;

    /*
     * Wait briefly before recreating the Canvas.
     * This gives the browser time to release the old context.
     */
    setTimeout(() => {
      setCanvasKey((previous) => previous + 1);

      recoveringRef.current = false;

      console.log(
        "Spine 3D: WebGL Canvas recreated."
      );
    }, 300);
  };

  const handleContextRestored = () => {
    console.log(
      "Spine 3D: WebGL context restored."
    );

    /*
     * Force a fresh Canvas after restoration.
     * This ensures Three.js recreates its GPU resources.
     */
    if (!recoveringRef.current) {
      recoveringRef.current = true;

      setTimeout(() => {
        setCanvasKey((previous) => previous + 1);

        recoveringRef.current = false;
      }, 100);
    }
  };

  return (
    <div
      className="
        relative
        h-full
        w-full
      "
    >
      <Canvas
        key={canvasKey}

        /*
         * Keep rendering continuously because the spine
         * is controlled by scroll progress.
         */
        frameloop="always"

        /*
         * Stable camera.
         */
        camera={{
          position: [0, 0.6, 7.2],
          fov: 42,
          near: 0.1,
          far: 100,
        }}

        /*
         * IMPORTANT:
         * Keep pixel ratio lower to reduce GPU memory usage.
         *
         * Your previous [1, 1.5] can consume considerably
         * more GPU memory on high-resolution displays.
         */
        dpr={[1, 1.25]}

        /*
         * WebGL configuration.
         */
        gl={{
          antialias: true,
          alpha: false,

          /*
           * "default" lets the browser manage the GPU instead
           * of forcing the high-performance GPU.
           */
          powerPreference: "default",

          preserveDrawingBuffer: false,
          stencil: false,
          depth: true,
        }}

        /*
         * Canvas styling.
         */
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}

        /*
         * =====================================================
         * WEBGL INITIALIZATION
         * =====================================================
         */

        onCreated={({ gl, camera }) => {
          /*
           * White background.
           */
          gl.setClearColor("#FFFFFF", 1);

          /*
           * Camera configuration.
           */
          camera.near = 0.1;
          camera.far = 100;
          camera.updateProjectionMatrix();

          /*
           * =================================================
           * WEBGL CONTEXT LOST
           * =================================================
           */

          const canvas = gl.domElement;

          canvas.addEventListener(
            "webglcontextlost",
            handleContextLost,
            false
          );

          /*
           * =================================================
           * WEBGL CONTEXT RESTORED
           * =================================================
           */

          canvas.addEventListener(
            "webglcontextrestored",
            handleContextRestored,
            false
          );

          console.log(
            "Spine 3D: WebGL renderer initialized."
          );
        }}
      >
        {/* =====================================================
            WHITE BACKGROUND
        ===================================================== */}

        <color
          attach="background"
          args={["#FFFFFF"]}
        />

        {/* =====================================================
            LIGHTING
        ===================================================== */}

        <ambientLight
          intensity={1.8}
          color="#FFFFFF"
        />

        <directionalLight
          position={[3, 4, 5]}
          intensity={1.3}
          color="#FFFFFF"
        />

        <directionalLight
          position={[-4, -2, -3]}
          intensity={0.6}
          color="#FFFFFF"
        />

        <pointLight
          position={[0, 1, 4]}
          intensity={0.7}
          color="#FFFFFF"
        />

        {/* =====================================================
            SPINE
        ===================================================== */}

        <RotatingRig progress={progress} />
      </Canvas>
    </div>
  );
}