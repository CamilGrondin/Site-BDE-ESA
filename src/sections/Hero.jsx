import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { Plane } from '../components/Plane.jsx';
import { Bolt } from '../components/Bolt.jsx';
import { Clock } from '../components/Clock.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Bienvenue sur le site du BDE <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Notre boutique officielle</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            
            <HeroCamera isMobile={isMobile}>
              <Plane scale={sizes.deskScale * 25} position={sizes.deskPosition} rotation={[0.1, -Math.PI / 4, 0]} />
            </HeroCamera>

            <group>
              <Bolt position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Clock position={sizes.clockPosition} scale={sizes.deskScale * 10} rotation={[-0.2, 0, 0]} /> {/* [controls.positionX, controls.positionY, controls.positionZ] */}
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Aller à la boutique" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
