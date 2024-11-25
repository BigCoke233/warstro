export const warstroData = {
    planets: {
        mars: {
            guard: ["aries"],
            element: "fire"
        },
        jupiter: {
            guard: ["sagittarius"],
            element: "fire"
        },
        venus: {
            guard: ["taurus", "libra"],
            element: "earth"
        },
        mercury: {
            guard: ["gemini", "virgo"],
            element: "air"
        },
        saturn: {
            guard: ["capricorn"],
            element: "earth"
        },
        uranus: {
            guard: ["aquarius"],
            element: "air"
        },
        neptune: {
            guard: ["pisces"],
            element: "water"
        },
        pluto: {
            guard: ["scorpio"],
            element: "water"
        },
        sun: {
            guard: ["leo"],
            element: "fire"
        },
        moon: {
            guard: ["cancer"],
            element: "water"
        }
    },
    signs: {
        aries: {
            guard: ["mars"],
            element: "fire"
        },
        pisces: {
            guard: ["neptune"],
            element: "water"
        },
        libra: {
            guard: ["venus"],
            element: "air"
        },
        taurus: {
            guard: ["venus"],
            element: "earth"
        },
        leo: {
            guard: ["sun"],
            element: "fire"
        },
        scorpio: {
            guard: ["pluto"],
            element: "water"
        },
        gemini: {
            guard: ["mercury"],
            element: "air"
        },
        virgo: {
            guard: ["mercury"],
            element: "earth"
        },
        sagittarius: {
            guard: ["jupiter"],
            element: "fire"
        },
        cancer: {
            guard: ["moon"],
            element: "water"
        },
        aquarius: {
            guard: ["uranus"],
            element: "air"
        },
        capricorn: {
            guard: ["saturn"],
            element: "earth"
        }
    },
    planetDice: {
        0: "mars",
        1: "jupiter",
        2: "venus",
        3: "mercury",
        4: "saturn",
        5: "uranus",
        6: "neptune",
        7: "pluto",
        8: "sun",
        9: "moon",
        10: "ascending",
        11: "descending"
    },
    landingTypes: {
        empty: 0,
        normal: 1,
        sameElement: 5,
        guarded: 9,
        ascending: 8,
        descending: 9
    },
    emptyCell: (x, y) => {
        return {
            owner: null,
            turn: null,
            position: { x, y }
        }
    }
}