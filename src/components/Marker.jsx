import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function Marker({
  curve,
  t,
  side = 1,
  title,
  note,
  active,
  scale = 1,
}) {
  const groupRef = useRef(null);
  const dotRef = useRef(null);

  /* ============================================================
     CALCULATE POSITIONS
  ============================================================ */

  const {
    anchor,
    connectorStart,
    connectorEnd,
    connectorLength,
    connectorQuaternion,
    connectorMidpoint,
  } = useMemo(() => {
    const position = curve.getPointAt(t);

    const tangent = curve
      .getTangentAt(t)
      .normalize();

    const upHint = new THREE.Vector3(0, 0, 1);

    const right = new THREE.Vector3()
      .crossVectors(upHint, tangent)
      .normalize();

    /* ----------------------------------------------------------
       NODE

       Keep the node close to the spine.
    ---------------------------------------------------------- */

    const anchor = position
      .clone()
      .addScaledVector(
        right,
        side * 0.46 * scale
      );

    /* ----------------------------------------------------------
       CONNECTOR

       Starts exactly from the node.
    ---------------------------------------------------------- */

    const connectorStart = anchor.clone();

    /*
      Increase this if you want the box farther away.
    */

    const connectorDistance = 0.72;

    const connectorEnd = anchor
      .clone()
      .addScaledVector(
        right,
        side * connectorDistance
      );

    /* ----------------------------------------------------------
       CYLINDER GEOMETRY

       Cylinder is used instead of <Line> so the connector
       is always clearly visible.
    ---------------------------------------------------------- */

    const direction = new THREE.Vector3()
      .subVectors(
        connectorEnd,
        connectorStart
      )
      .normalize();

    const connectorLength =
      connectorStart.distanceTo(
        connectorEnd
      );

    const connectorMidpoint =
      new THREE.Vector3()
        .addVectors(
          connectorStart,
          connectorEnd
        )
        .multiplyScalar(0.5);

    const connectorQuaternion =
      new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction
      );

    return {
      anchor,
      connectorStart,
      connectorEnd,
      connectorLength,
      connectorQuaternion,
      connectorMidpoint,
    };
  }, [curve, t, side, scale]);

  /* ============================================================
     ACTIVE ANIMATION
  ============================================================ */

  useFrame(({ clock }) => {
    if (dotRef.current) {
      const pulse =
        1 +
        Math.sin(
          clock.getElapsedTime() * 3
        ) *
          0.12;

      dotRef.current.scale.setScalar(
        active ? pulse : 0.001
      );
    }

    if (groupRef.current) {
      const targetOpacity = active ? 1 : 0;

      groupRef.current.userData.opacity =
        THREE.MathUtils.lerp(
          groupRef.current.userData.opacity ?? 0,
          targetOpacity,
          0.08
        );
    }
  });

  return (
    <group ref={groupRef}>

      {/* ========================================================
          CONNECTOR LINE
          
          Real 3D cylinder.
          
          This guarantees:
          
          SPINE → NODE → LINE → CARD
      ======================================================== */}

      <mesh
        position={connectorMidpoint}
        quaternion={connectorQuaternion}
        renderOrder={30}
      >
        <cylinderGeometry
          args={[
            active ? 0.012 : 0.008,
            active ? 0.012 : 0.008,
            connectorLength,
            8,
          ]}
        />

        <meshBasicMaterial
          color="#0E5AE8"
          transparent
          opacity={active ? 1 : 0}
          depthTest={false}
          depthWrite={false}
        />
      </mesh>

      {/* ========================================================
          NODE
      ======================================================== */}

      <mesh
        ref={dotRef}
        position={anchor}
        renderOrder={40}
      >
        <sphereGeometry
          args={[
            0.075,
            20,
            20,
          ]}
        />

        <meshBasicMaterial
          color="#0E5AE8"
          transparent
          opacity={active ? 1 : 0}
          depthTest={false}
          depthWrite={false}
        />
      </mesh>

      {/* ========================================================
          NODE OUTER GLOW
      ======================================================== */}

      {active && (
        <mesh
          position={anchor}
          scale={1.7}
          renderOrder={35}
        >
          <sphereGeometry
            args={[
              0.075,
              16,
              16,
            ]}
          />

          <meshBasicMaterial
            color="#9DDBFA"
            transparent
            opacity={0.3}
            depthTest={false}
            depthWrite={false}
          />
        </mesh>
      )}

      {/* ========================================================
          LABEL

          IMPORTANT:
          No "center" here.

          The HTML is anchored at the connector endpoint
          and positioned from that point.
      ======================================================== */}

      <Html
        position={connectorEnd}
        center={false}
        distanceFactor={6}
        occlude={false}
        zIndexRange={[1000, 0]}
        style={{
          pointerEvents: "none",

          /*
            Prevent Drei's wrapper from changing the
            intended left/right alignment.
          */

          transform:
            side > 0
              ? "translate3d(8px, -50%, 0)"
              : "translate3d(calc(-100% - 8px), -50%, 0)",
        }}
      >
        <div
          className={`
            pointer-events-none
            select-none

            font-poppins

            text-left

            transition-opacity
            duration-300

            ${
              active
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >

          {/* ==================================================
              CARD
          ================================================== */}

          <div
            className="
              relative

              min-w-[190px]
              max-w-[210px]

              rounded-xl

              border
              border-[#9DDBFA]

              bg-[#F5FAFF]

              px-4
              py-3

              font-poppins
            "
          >

            {/* =================================================
                BLUE CARD EDGE
            ================================================= */}

            <span
              className={`
                absolute

                top-0

                h-full

                w-[3px]

                rounded-full

                bg-[#0E5AE8]

                ${
                  side > 0
                    ? "left-0"
                    : "right-0"
                }
              `}
            />

            {/* =================================================
                TITLE
            ================================================= */}

            <div
              className="
                font-poppins

                text-[12px]

                font-semibold

                leading-[1.3]

                tracking-[-0.01em]

                text-[#082B5C]
              "
            >
              {title}
            </div>

            {/* =================================================
                NOTE
            ================================================= */}

            {note && (
              <div
                className="
                  mt-1.5

                  max-w-[180px]

                  whitespace-normal

                  font-poppins

                  text-[9px]

                  font-normal

                  leading-[1.45]

                  text-[#64748B]
                "
              >
                {note}
              </div>
            )}

          </div>

        </div>
      </Html>
    </group>
  );
}