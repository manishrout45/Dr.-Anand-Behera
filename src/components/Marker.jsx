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

       IMPORTANT:
       Spine size is NOT changed.
    ---------------------------------------------------------- */

    const anchor = position
      .clone()
      .addScaledVector(
        right,
        side * 0.46 * scale
      );

    /* ----------------------------------------------------------
       CONNECTOR

       Shorter because the card is now smaller.
    ---------------------------------------------------------- */

    const connectorStart = anchor.clone();

    const connectorDistance = 0.55;

    const connectorEnd = anchor
      .clone()
      .addScaledVector(
        right,
        side * connectorDistance
      );

    /* ----------------------------------------------------------
       CONNECTOR GEOMETRY
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
      ======================================================== */}

      <mesh
        position={connectorMidpoint}
        quaternion={connectorQuaternion}
        renderOrder={30}
      >
        <cylinderGeometry
          args={[
            active ? 0.010 : 0.007,
            active ? 0.010 : 0.007,
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
          LABEL / ROTATING CARD
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
            Very small offset so the compact card
            stays close to the connector.
          */

          transform:
            side > 0
              ? "translate3d(4px, -50%, 0)"
              : "translate3d(calc(-100% - 4px), -50%, 0)",
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
              COMPACT ANATOMY CARD
          ================================================== */}

          <div
            className="
              relative

              w-[115px]
              min-w-[115px]
              max-w-[115px]

              rounded-md

              border
              border-[#9DDBFA]

              bg-[#F5FAFF]

              px-2
              py-1.5

              shadow-[0_3px_10px_rgba(14,90,232,0.06)]

              font-poppins

              sm:w-[125px]
              sm:min-w-[125px]
              sm:max-w-[125px]

              sm:px-2
              sm:py-1.5

              md:w-[135px]
              md:min-w-[135px]
              md:max-w-[135px]

              md:px-2.5
              md:py-2

              lg:w-[155px]
              lg:min-w-[155px]
              lg:max-w-[155px]

              lg:px-3
              lg:py-2.5
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

                w-[2px]

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

                text-[8px]

                font-semibold

                leading-[1.2]

                tracking-[-0.01em]

                text-[#082B5C]

                sm:text-[8.5px]

                md:text-[9px]

                lg:text-[10px]
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
                  mt-0.5

                  w-full

                  whitespace-normal

                  font-poppins

                  text-[6px]

                  font-normal

                  leading-[1.3]

                  text-[#64748B]

                  sm:text-[6.5px]

                  md:text-[7px]

                  lg:text-[8px]
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