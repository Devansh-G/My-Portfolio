import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import UseMediaQuery from "react-responsive/src/useMediaQuery.js";
import {Room} from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    // const isTablet = UseMediaQuery({query:`(max-width: 1024px)`});
    const isMobile = UseMediaQuery({query:`(max-width: 768px)`});
    return (
        <Canvas camera={{position:[0, 0, 15], fov:45}}>
            <OrbitControls
                enablePan={false}
                // enableZoom={!isTablet}
                enableZoom={false}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <Suspense feedback={null}>
                <HeroLights />
                <Particles count={100}></Particles>
                <group
                    scale={isMobile?0.5 : 0.8}
                    position ={[0,-3.5,0]}
                    rotation ={[0, -Math.PI/4, 0]}
                >
                    <Room />
                </group>
            </Suspense>
        </Canvas>
    )
}
export default HeroExperience
