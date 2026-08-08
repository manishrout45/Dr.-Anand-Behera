import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// Control points approximating the natural double-S curvature of a human
// spine: cervical lordosis -> thoracic kyphosis -> lumbar lordosis.
const CONTROL_POINTS = [
  [0, 3.2, 0.05],
  [0, 2.8, -0.18],
  [0, 2.4, -0.12],
  [0, 1.9, 0.1],
  [0, 1.4, 0.42],
  [0, 0.9, 0.62],
  [0, 0.4, 0.5],
  [0, -0.1, 0.16],
  [0, -0.6, -0.16],
  [0, -1.1, -0.3],
  [0, -1.6, -0.16],
  [0, -2.0, 0.05],
]

const VERTEBRA_COUNT = 26

function useSpineCurve() {
  return useMemo(() => {
    const pts = CONTROL_POINTS.map((p) => new THREE.Vector3(...p))
    return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5)
  }, [])
}

// Builds an orientation quaternion at parameter t: forward = tangent,
// "posterior" (back of the body, where spinous processes point) = a
// smoothly-varying vector derived from the curve's curvature plane.
function frameAt(curve, t, upHint = new THREE.Vector3(0, 0, 1)) {
  const position = curve.getPointAt(t)
  const tangent = curve.getTangentAt(t).normalize()
  const right = new THREE.Vector3().crossVectors(upHint, tangent).normalize()
  const posterior = new THREE.Vector3().crossVectors(tangent, right).normalize()
  const m = new THREE.Matrix4().makeBasis(right, posterior, tangent)
  const quat = new THREE.Quaternion().setFromRotationMatrix(m)
  return { position, quat, posterior }
}

function Vertebra({ curve, t, scale }) {
  const { position, quat, posterior } = useMemo(() => frameAt(curve, t), [curve, t])

  const bodyPos = position
  const processPos = useMemo(
    () => position.clone().add(posterior.clone().multiplyScalar(0.34 * scale)),
    [position, posterior, scale]
  )

  return (
    <group>
      {/* vertebral body */}
      <mesh position={bodyPos} quaternion={quat} castShadow receiveShadow>
        <cylinderGeometry args={[0.26 * scale, 0.28 * scale, 0.22 * scale, 10]} />
        <meshStandardMaterial color="#EDE3CF" roughness={0.55} metalness={0.05} />
      </mesh>
      {/* neural arch ring */}
      <mesh position={bodyPos} quaternion={quat} castShadow>
        <torusGeometry args={[0.3 * scale, 0.045 * scale, 8, 16]} />
        <meshStandardMaterial color="#DCCEB0" roughness={0.6} />
      </mesh>
      {/* spinous process */}
      <mesh position={processPos} quaternion={quat} castShadow>
        <coneGeometry args={[0.07 * scale, 0.34 * scale, 6]} />
        <meshStandardMaterial color="#D8C9A9" roughness={0.65} />
      </mesh>
    </group>
  )
}

function IntervertebralDisc({ curve, t, scale }) {
  const { position, quat } = useMemo(() => frameAt(curve, t), [curve, t])
  return (
    <mesh position={position} quaternion={quat}>
      <cylinderGeometry args={[0.27 * scale, 0.27 * scale, 0.06 * scale, 10]} />
      <meshStandardMaterial color="#3E8E8A" roughness={0.4} emissive="#1c4a48" emissiveIntensity={0.25} />
    </mesh>
  )
}

function SpinalCord({ curve }) {
  const tubeGeo = useMemo(() => new THREE.TubeGeometry(curve, 200, 0.09, 12, false), [curve])
  return (
    <mesh geometry={tubeGeo}>
      <meshStandardMaterial
        color="#8FE3DB"
        emissive="#5FBDB4"
        emissiveIntensity={1.1}
        roughness={0.25}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

export default function SpineModel({ scale = 1 }) {
  const curve = useSpineCurve()

  const vertebraeT = useMemo(() => {
    const arr = []
    for (let i = 0; i < VERTEBRA_COUNT; i++) {
      arr.push(0.02 + (i / (VERTEBRA_COUNT - 1)) * 0.96)
    }
    return arr
  }, [])

  const bodyScale = (t) => {
    // slightly larger vertebrae lower down the column (lumbar > thoracic > cervical)
    return 0.68 + t * 0.55
  }

  return (
    <group scale={scale}>
      <SpinalCord curve={curve} />
      {vertebraeT.map((t, i) => (
        <group key={i}>
          <Vertebra curve={curve} t={t} scale={bodyScale(t)} />
          {i < vertebraeT.length - 1 && (
            <IntervertebralDisc
              curve={curve}
              t={(t + vertebraeT[i + 1]) / 2}
              scale={bodyScale(t)}
            />
          )}
        </group>
      ))}
    </group>
  )
}

export { CONTROL_POINTS }
export function makeSpineCurve() {
  const pts = CONTROL_POINTS.map((p) => new THREE.Vector3(...p))
  return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5)
}
