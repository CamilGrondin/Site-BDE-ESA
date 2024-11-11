import Alert from "../components/Alert";
import useAlert from '../hooks/useAlert.js';

import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';
import GridCamera from '../components/GridCamera.jsx';
import { Polo } from '../components/Polo.jsx';
import { calculateSizes, count } from '../constants/index.js';
import Button from '../components/Button.jsx';
import { Plane } from '../components/Plane.jsx';


import { useState } from 'react';
import Price from '../components/Price.jsx';
import { Stylo } from "../components/Stylo.jsx";

const About = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  
  const { alert, showAlert } = useAlert();

  const [urlFlamme, setUrlFlamme] = useState("https://buy.stripe.com/3cs2buc9icMx7f28ww");

  const [stickersNow, setStickersNow] = useState(0);
  const [mugsNow, setMugsNow] = useState(0);
  const [flammeNow, setFlammeNow] = useState(0);
  const [patchNow, setPatchNow] = useState(0);

  let stickersNbr = 1;
  let flammesNbr = 1;
  let patchNbr = 1;
  let mugsNbr = 1;

  count.map((item) => {
    stickersNbr = item.stickersNbr;
    flammesNbr = item.flammesNbr;
    patchNbr = item.patchNbr;
    mugsNbr = item.mugsNbr;
  });

  const handleNavigation = (direction, type) => {
    if (type === 3) {
      setStickersNow((prevIndex) => {
        if (direction === 'previous') {
          return prevIndex === 0 ? stickersNbr - 1 : prevIndex - 1;
        } else {
          return prevIndex === stickersNbr - 1 ? 0 : prevIndex + 1;
        }
      });
    }
    else if (type === 1) {
      setFlammeNow((prevIndex) => {
        if (direction === 'previous') {
          return prevIndex === 0 ? flammesNbr - 1 : prevIndex - 1;
        } else {
          return prevIndex === flammesNbr - 1 ? 0 : prevIndex + 1;
        }
      });
    }
    else if (type === 2) {
      setPatchNow((prevIndex) => {
        if (direction === 'previous') {
          return prevIndex === 0 ? patchNbr - 1 : prevIndex - 1;
        } else {
          return prevIndex === patchNbr - 1 ? 0 : prevIndex + 1;
        }
      });
    }
    else if (type === 4) {
      setMugsNow((prevIndex) => {
        if (direction === 'previous') {
          return prevIndex === 0 ? mugsNbr - 1 : prevIndex - 1;
        } else {
          return prevIndex === mugsNbr - 1 ? 0 : prevIndex + 1;
        }
      });
    };
  };

  const handleInfoSponsor = () => {
    showAlert({
      show: true,
      text: "En achetant ce stylo, vous reversez 1€ à l'association STARBOARD",
      type: 'info',
      autoDismiss: true,
    });
  };

  useEffect(() => {  // Stripe URL
    if(flammeNow === 1){
      setUrlFlamme("https://buy.stripe.com/bIY3fy1uEh2N42QbIK");
    } else if(flammeNow === 2){
      setUrlFlamme("https://buy.stripe.com/fZeeYg2yI13P8j66or");
    } else {
      setUrlFlamme("https://buy.stripe.com/3cs2buc9icMx7f28ww");
    }
  }, [flammeNow]);

  return (
    <section className="c-space my-20" id="about">
      {alert.show && <Alert {...alert} />}
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 bg-black-200">
          <div className="grid-container">
            <img src={"assets/flamme" + flammeNow + '.png'} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div className="flex justify-between items-center">
              <button className="arrow-btn" onClick={() => handleNavigation('previous', 1)}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation('next', 1)}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>

            <div>
              <Price name="Flamme" amount="6" />
              <p className="grid-subtext text-justify">
                Des flammes à votre image pour vous accompagner lors de vos vols, de vos cours... ou tout simplement pour avoir du style. 
              </p>
              <a href={urlFlamme} className="w-fit" >
                <Button name="Acheter" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-span-1 xl:row-span-3 bg-black-200">
          <div className="grid-container">
            <img src={"assets/patch" + patchNow + '.png'} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div className="flex justify-between items-center">
              <button className="arrow-btn" onClick={() => handleNavigation('previous', 2)}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation('next', 2)}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>

            <div>
              <Price name="Patch" amount="7" stock='soon' />
              <p className="grid-subtext text-justify">
                Des patch à votre image pour vous accompagner lors de vos vols, de vos cours... ou tout simplement pour avoir du style.
              </p>
              <a href="#about" className="w-fit">
                <Button name="Acheter" containerClass="w-full mt-10" action='comingsoon' />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 bg-black-200">
          <div className="grid-container">
            <img src={"assets/sticker" + stickersNow + '.png'} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div className="flex justify-between items-center">
              <button className="arrow-btn" onClick={() => handleNavigation('previous', 3)}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation('next', 3)}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>

            <div>
              <Price name="Stikers" amount="2" stock='soon' />
              <p className="grid-subtext">
                Des stikers a coller sur vos ordinateurs, vos voitures, vos gourdes ou tout autre support pour permettre à votre style de briller.
              </p>
              <a href="#about" className="w-fit">
                <Button name="Acheter" containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 bg-black-200">
          <div className="grid-container">
            <img src={"assets/mugs" + mugsNow + '.png'} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div className="flex justify-between items-center">
              <button className="arrow-btn" onClick={() => handleNavigation('previous', 4)}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation('next', 4)}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>

            <div>
              <Price name="Mugs" amount="15" stock='soon' />
              <p className="grid-subtext">
                Une tasse en céramique personnalisée pour vous accompagner lors de vos journées de cours ou de vos voyages.
              </p>
              <a href="#about" className="w-fit">
                <Button name="Acheter" containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 bg-black-200">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <Price name="Gourdes" amount="10" stock='no' />
              <p className="grid-subtext">
                Des gourdes pour vous hydrater avec style lors de vos journées de cours ou de vos voyages.
              </p>
              <a href="#about" className="w-fit">
                <Button name="Acheter" containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 bg-black-200">
          <div className="grid-container">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <GridCamera isMobile={isMobile}>
                  <Polo scale={sizes.poloScale * 6} position={sizes.poloPosition} rotation={[0.2, 0, 0]} />
                </GridCamera>

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>

            <div>
              <Price name="Polo" amount="20" stock='no' />
              <p className="grid-subtext">
                Des polos pour vous habiller avec style lors de vos journées de cours ou de vos voyages.
              </p>
              <a href="#about" className="w-fit">
                <Button name="Acheter" containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 bg-black-200">
          <div className="grid-container">
            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <GridCamera isMobile={isMobile}>
                  <Plane scale={sizes.deskScale * 30} position={sizes.da40Position} rotation={[-0.1, -Math.PI / 4, 0]} />
                </GridCamera>

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
              </Suspense>
            </Canvas>

            <div>
              <Price name="DA40" amount="60" stock='no' />
              <p className="grid-subtext">
                Un DA40 imprimé en 3D pour décorer votre bureau ou votre chambre.
              </p>
              <a href="#about" className="w-fit">
                <Button name="Acheter" containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 bg-green-950">
          <div className="grid-container">
            <div className='text-center text-3xl font-bold text-red-500'>Partenariat avec</div>
            <a href='http://starboard-association.com/' target="_blank" className='text-center text-3xl font-bold underline text-white animate-bounce'>STARBOARD ASSOCIATION</a>

            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                <Stylo scale={sizes.poloScale * 30} position={sizes.styloPosition} rotation={[0, 0, -Math.PI / 4]} />

                <ambientLight intensity={10} />
                <directionalLight position={[-10, -10, -10]} intensity={2} color={'red'} />
                <directionalLight position={[10, 10, 10]} intensity={5} color={'white'} />

                <OrbitControls autoRotate enableZoom={false} autoRotateSpeed={5}/>
              </Suspense>
            </Canvas>

            <div>
              <div className="flex items-center justify-between">
                <p className="grid-headtext">Stylo</p>

                <button className="" onClick={() => handleInfoSponsor()}>
                  <p className="price_tag text-purple-500 underline">1.5€</p>
                </button>
              </div>
              <p className="grid-subtext">
                Des stylos pour écrire avec style lors de vos journées de cours ou de vos voyages.
              </p>
              <a href="https://buy.stripe.com/9AQ03mc9ieUFeHucMQ" className="w-fit">
                <Button name="Acheter" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
