export const navLinks = [
  {
    id: 1,
    name: 'Menu',
    href: '#home',
  },
  {
    id: 2,
    name: 'Boutique',
    href: '#about',
  },
];

export const count = [
  {
    stickersNbr: 3,
    mugsNbr: 3,
    flammesNbr: 3,
    patchNbr: 2
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    poloScale: isSmall ? 0.05 : isMobile ? 0.05 : 0.065,
    deskPosition: isMobile ? [-2, -3, 0] : [-2.5, -4, 0],
    poloPosition: isMobile ? [0, -15, 0] : [0, -20, 0],
    styloPosition: isMobile ? [0, 0, 0] : [0, 0, 0],
    da40Position: isMobile ? [-3, -3, 0] : [-2.5, -2.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    clockPosition: isSmall ? [-7, 5.5, 0] : isMobile ? [-6, 7.5, -2.5] : isTablet ? [-9.5, 5.5, 0] : [-13, 5.5, 0],
    targetPosition: isSmall ? [-4, -10, -10] : isMobile ? [-7, -10, -10] : isTablet ? [-11, -7, -10] : [-10, -10, -10],
  };
};

export const myProjects = [
  {
    title: 'Vol de découverte',
    desc: 'Découvrez les sensations du pilotage d\'un boeing 737.',
    subdesc:
      'Venez découvrir les sensations du pilotage d\'un avion de ligne, en compagnie d\'un pilote professionnel, vous serez aux commandes de l\'avion et découvrirez les sensations du pilotage d\'un avion de ligne.',
    href: 'https://buy.stripe.com/8wM6rK6OY8wheHu289',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/images/737.png',
    logoStyle: {
      backgroundColor: '#16182A',
      border: '0.05px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Personnes',
        path: '/assets/images/people.svg',
        desc: '1 personne',
      },
      {
        id: 2,
        name: 'Temps',
        path: '/assets/images/time.svg',
        desc: '30 minutes',
      },
      {
        id: 3,
        name: 'Prix',
        path: '/assets/images/euro.svg',
        desc: '50€',
      },
    ],
  },
];