function createSigns(planets) {
  return {
    aries: {
      name: "aries",
      element: "fire",
      ruled_by: planets.mars,
    },
    taurus: {
      name: "taurus",
      element: "earth",
      ruled_by: planets.venus,
    },
    gemini: {
      name: "gemini",
      element: "air",
      ruled_by: planets.mercury,
    },
    cancer: {
      name: "cancer",
      element: "water",
      ruled_by: planets.moon,
    },
    leo: {
      name: "leo",
      element: "fire",
      ruled_by: planets.sun,
    },
    virgo: {
      name: "virgo",
      element: "earth",
      ruled_by: planets.mercury,
    },
    libra: {
      name: "libra",
      element: "air",
      ruled_by: planets.venus,
    },
    scorpio: {
      name: "scorpio",
      element: "water",
      ruled_by: planets.pluto,
    },
    sagittarius: {
      name: "sagittarius",
      element: "fire",
      ruled_by: planets.jupiter,
    },
    capricorn: {
      name: "capricorn",
      element: "earth",
      ruled_by: planets.saturn,
    },
    aquarius: {
      name: "aquarius",
      element: "air",
      ruled_by: planets.uranus,
    },
    pisces: {
      name: "pisces",
      element: "water",
      ruled_by: planets.neptune,
    },
  };
}

function createPlanets(signs) {
  return {
    sun: {
      name: "sun",
      element: "fire",
      ruling: [signs.leo],
    },
    moon: {
      name: "moon",
      element: "water",
      ruling: [signs.cancer],
    },
    mercury: {
      name: "mercury",
      element: "air",
      ruling: [signs.gemini, signs.virgo],
    },
    venus: {
      name: "venus",
      element: "earth",
      ruling: [signs.taurus, signs.libra],
    },
    mars: {
      name: "mars",
      element: "fire",
      ruling: [signs.aries],
    },
    jupiter: {
      name: "jupiter",
      element: "fire",
      ruling: [signs.sagittarius],
    },
    saturn: {
      name: "saturn",
      element: "earth",
      ruling: [signs.capricorn],
    },
    uranus: {
      name: "uranus",
      element: "air",
      ruling: [signs.aquarius],
    },
    neptune: {
      name: "neptune",
      element: "water",
      ruling: [signs.pisces],
    },
    pluto: {
      name: "pluto",
      element: "water",
      ruling: [signs.scorpio],
    },
  };
}

const signs = createSigns({})
const planets = createPlanets(signs)

const signNames = Object.keys(signs)
const planetNames = Object.keys(planets)

signNames.forEach((key) => {
  const sign = signs[key];
  if (Array.isArray(sign.ruled_by?.ruling)) {
    sign.ruled_by.ruling.push(sign);
  }
});

export { signs, planets, signNames, planetNames }
