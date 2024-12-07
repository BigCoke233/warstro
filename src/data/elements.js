function createSigns(planets) {
  return {
    aries: {
      element: "fire",
      ruled_by: planets.mars,
    },
    taurus: {
      element: "earth",
      ruled_by: planets.venus,
    },
    gemini: {
      element: "air",
      ruled_by: planets.mercury,
    },
    cancer: {
      element: "water",
      ruled_by: planets.moon,
    },
    leo: {
      element: "fire",
      ruled_by: planets.sun,
    },
    virgo: {
      element: "earth",
      ruled_by: planets.mercury,
    },
    libra: {
      element: "air",
      ruled_by: planets.venus,
    },
    scorpio: {
      element: "water",
      ruled_by: planets.pluto,
    },
    sagittarius: {
      element: "fire",
      ruled_by: planets.jupiter,
    },
    capricorn: {
      element: "earth",
      ruled_by: planets.saturn,
    },
    aquarius: {
      element: "air",
      ruled_by: planets.uranus,
    },
    pisces: {
      element: "water",
      ruled_by: planets.neptune,
    },
  };
}

function createPlanets(signs) {
  return {
    sun: {
      element: "fire",
      ruling: [signs.leo],
    },
    moon: {
      element: "water",
      ruling: [signs.cancer],
    },
    mercury: {
      element: "air",
      ruling: [signs.gemini, signs.virgo],
    },
    venus: {
      element: "earth",
      ruling: [signs.taurus, signs.libra],
    },
    mars: {
      element: "fire",
      ruling: [signs.aries],
    },
    jupiter: {
      element: "fire",
      ruling: [signs.sagittarius],
    },
    saturn: {
      element: "earth",
      ruling: [signs.capricorn],
    },
    uranus: {
      element: "air",
      ruling: [signs.aquarius],
    },
    neptune: {
      element: "water",
      ruling: [signs.pisces],
    },
    pluto: {
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
