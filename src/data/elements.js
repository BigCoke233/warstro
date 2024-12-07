function createSigns(planets) {
  return {
    aries: {
      element: "fire",
      guard: planets.mars,
    },
    taurus: {
      element: "earth",
      guard: planets.venus,
    },
    gemini: {
      element: "air",
      guard: planets.mercury,
    },
    cancer: {
      element: "water",
      guard: planets.moon,
    },
    leo: {
      element: "fire",
      guard: planets.sun,
    },
    virgo: {
      element: "earth",
      guard: planets.mercury,
    },
    libra: {
      element: "air",
      guard: planets.venus,
    },
    scorpio: {
      element: "water",
      guard: planets.pluto,
    },
    sagittarius: {
      element: "fire",
      guard: planets.jupiter,
    },
    capricorn: {
      element: "earth",
      guard: planets.saturn,
    },
    aquarius: {
      element: "air",
      guard: planets.uranus,
    },
    pisces: {
      element: "water",
      guard: planets.neptune,
    },
  };
}

function createPlanets(signs) {
  return {
    sun: {
      element: "fire",
      guarding: [signs.leo],
    },
    moon: {
      element: "water",
      guarding: [signs.cancer],
    },
    mercury: {
      element: "air",
      guarding: [signs.gemini, signs.virgo],
    },
    venus: {
      element: "earth",
      guarding: [signs.taurus, signs.libra],
    },
    mars: {
      element: "fire",
      guarding: [signs.aries],
    },
    jupiter: {
      element: "fire",
      guarding: [signs.sagittarius],
    },
    saturn: {
      element: "earth",
      guarding: [signs.capricorn],
    },
    uranus: {
      element: "air",
      guarding: [signs.aquarius],
    },
    neptune: {
      element: "water",
      guarding: [signs.pisces],
    },
    pluto: {
      element: "water",
      guarding: [signs.scorpio],
    },
  };
}

const signs = createSigns({})
const planets = createPlanets(signs)

const signNames = Object.keys(signs)
const planetNames = Object.keys(planets)

signNames.forEach((key) => {
  const sign = signs[key];
  if (Array.isArray(sign.guard?.guarding)) {
    sign.guard.guarding.push(sign);
  }
});

export { signs, planets, signNames, planetNames }
