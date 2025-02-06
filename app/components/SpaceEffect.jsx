"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Points, PointMaterial } from "@react-three/drei"

function RandomParticles({ count = 1000, color = "#ffffff", size = 0.05, speed = 0.02 }) {
  const points = useRef()

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200
    }
    return positions
  }, [count])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * speed

      const positions = points.current.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += delta * speed * 10
        if (positions[i + 2] > 100) {
          positions[i + 2] = -100
        }
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={points} positions={particlesPosition}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ShootingStars() {
  const points = useRef()
  const count = 20

  const meteorData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 200, 100 + Math.random() * 50, (Math.random() - 0.5) * 200),
      velocity: new THREE.Vector3((Math.random() - 0.5) * 8, -(8 + Math.random() * 8), (Math.random() - 0.5) * 8),
      acceleration: new THREE.Vector3(0, -0.5, 0),
      size: 0.2 + Math.random() * 0.8,
      active: false,
      lifespan: 1 + Math.random() * 2,
    }))
  }, [])

  const positions = useMemo(() => new Float32Array(count * 3), [])
  const sizes = useMemo(() => new Float32Array(count), [])

  useFrame((state, delta) => {
    meteorData.forEach((meteor, i) => {
      if (!meteor.active && Math.random() < 0.02) {
        meteor.active = true
        meteor.position.set((Math.random() - 0.5) * 200, 100 + Math.random() * 50, (Math.random() - 0.5) * 200)
        meteor.velocity.set((Math.random() - 0.5) * 8, -(8 + Math.random() * 8), (Math.random() - 0.5) * 8)
        meteor.lifespan = 1 + Math.random() * 2
      }

      if (meteor.active) {
        meteor.velocity.add(meteor.acceleration.clone().multiplyScalar(delta))
        meteor.position.add(meteor.velocity.clone().multiplyScalar(delta))
        meteor.lifespan -= delta

        if (meteor.lifespan <= 0 || meteor.position.y < -100) {
          meteor.active = false
        }
      }

      const i3 = i * 3
      positions[i3] = meteor.position.x
      positions[i3 + 1] = meteor.position.y
      positions[i3 + 2] = meteor.position.z
      sizes[i] = meteor.active ? meteor.size * (meteor.lifespan / 3) : 0
    })

    if (points.current) {
      points.current.geometry.attributes.position.needsUpdate = true
      points.current.geometry.attributes.size.needsUpdate = true
    }
  })

  return (
    <Points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#ffffff"
        size={1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export function SpaceEffects() {
  return (
    <>
      <RandomParticles count={6000} color="#ffffff" size={0.15} speed={0.01} />
      <RandomParticles count={3000} color="#88ccff" size={0.12} speed={0.015} />
      <RandomParticles count={1500} color="#ffaa44" size={0.13} speed={0.02} />
      <ShootingStars />
    </>
  )
}