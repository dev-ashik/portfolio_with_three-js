import { OrbitControls, RenderTexture, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

const Cube = () => {
    const textRef= useRef();
    useFrame(state=> textRef.current.position.x = state.clock.elapsedTime)
  return (
    <mesh>
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <perspectiveCamera makeDefault position={[0, 0, 2]}/>
                    <color attach="background" args={["#dc9dcd"]}/>
                    <Text ref={textRef} fontSize={1} color="#555">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
  )
}

export default Cube