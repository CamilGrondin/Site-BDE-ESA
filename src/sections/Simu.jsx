import { Canvas } from "@react-three/fiber"
import { Leva, useControls } from "leva"
import { Suspense } from "react"
import CanvasLoader from "../components/Loading"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { calculateSizes } from "../constants"
import { Boeing } from "../components/Boeing"
import Button from "../components/Button"
import Price from "../components/Price"

const Simu = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const controls = useControls({  // For Leva
    positionX: {
      value: 0,
      min: -50,
      max: 10,
    },
    positionY: {
      value: -15,
      min: -30,
      max: 10,
    },
    positionZ: {
      value: 0,
      min: -10,
      max: 10,
    },
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="simulator">
        <div className="w-full mx-auto flex flex-col c-space gap-3 my-5">
          <p className="sm:text-3xl text-xl font-medium text-purple-500 text-center font-generalsans">
            Vivez une expérience unique
          </p>
        </div>

        <div className="w-full h-full min-h-screen inset-0">
          <Leva hidden />
          <Canvas className="w-full h-full min-h-screen">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              
              <Boeing scale={sizes.deskScale * 100} position={[controls.positionX, controls.positionY - 16.2, controls.positionZ + 25]} rotation={[0.1, -Math.PI, 0]} />

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />

              <OrbitControls enableZoom autoRotate />
            </Suspense>
          </Canvas>
        </div>

        <div>
          <Price name="Patch" amount="7" />
          <p className="grid-subtext text-justify">
            Vous avez la possibilité de réserver une session de simulation de vol pour une durée de 30 minutes. <br />
            Vous aurez la possibilité de choisir votre destination parmi une liste de plus de 24 000 aéroports dans le monde entier. <br />
            Vous pourrez également choisir votre avion parmi une liste de plus de 30 appareils différents.
          </p>
          <a href="#about" className="w-fit">
            <Button name="Réserver une session" isBeam containerClass="w-full mt-10" />
          </a>
        </div>
    </section>
  )
}

export default Simu