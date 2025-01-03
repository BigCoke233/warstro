import React from 'react';

import { GiSun, GiMoon } from "react-icons/gi";

import { ReactComponent as Aquarius } from "../assets/icons/aquarius.svg"
import { ReactComponent as Aries } from "../assets/icons/aries.svg"
import { ReactComponent as Cancer } from "../assets/icons/cancer.svg"
import { ReactComponent as Capricorn } from "../assets/icons/capricorn.svg"
import { ReactComponent as Gemini } from "../assets/icons/gemini.svg"
import { ReactComponent as Juno } from "../assets/icons/juno.svg"
import { ReactComponent as Jupiter } from "../assets/icons/jupiter.svg"
import { ReactComponent as Leo } from "../assets/icons/leo.svg"
import { ReactComponent as Libra } from "../assets/icons/libra.svg"
import { ReactComponent as Lilith } from "../assets/icons/lilith.svg"
import { ReactComponent as Mars } from "../assets/icons/mars.svg"
import { ReactComponent as Mercury } from "../assets/icons/mercury.svg"
import { ReactComponent as Neptune } from "../assets/icons/neptune.svg"
import { ReactComponent as Pisces } from "../assets/icons/pisces.svg"
import { ReactComponent as Pluto } from "../assets/icons/pluto.svg"
import { ReactComponent as Sagittarius } from "../assets/icons/sagittarius.svg"
import { ReactComponent as Saturn } from "../assets/icons/saturn.svg"
import { ReactComponent as Scorpio } from "../assets/icons/scorpio.svg"
import { ReactComponent as Taurus } from "../assets/icons/taurus.svg"
import { ReactComponent as Uranus } from "../assets/icons/uranus.svg"
import { ReactComponent as Venus } from "../assets/icons/venus.svg"
import { ReactComponent as Virgo } from "../assets/icons/virgo.svg"

const components = {
  sun: GiSun,
  moon: GiMoon,
  aquarius: Aquarius,
  aries: Aries,
  cancer: Cancer,
  capricorn: Capricorn,
  gemini: Gemini,
  juno: Juno,
  jupiter: Jupiter,
  leo: Leo,
  libra: Libra,
  lilith: Lilith,
  mars: Mars,
  mercury: Mercury,
  neptune: Neptune,
  pisces: Pisces,
  pluto: Pluto,
  sagittarius: Sagittarius,
  saturn: Saturn,
  scorpio: Scorpio,
  taurus: Taurus,
  uranus: Uranus,
  venus: Venus,
  virgo: Virgo,
};

export default function Icon(props) {
  if (!components[props.name]) return null;
  const SpecificIcon = components[props.name]
  return <span className="icon"><SpecificIcon /></span>;
}
