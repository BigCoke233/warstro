import { useState, useEffect, useRef } from "react";
import Icon from "../Icon";

export default function Dice(props) {
  const { G, type, index } = props.data;

  function randomNumber() {
    return Math.floor(Math.random() * (type === "sign" ? 13 : 9)) + 1;
  }

  const [number, setNumber] = useState(randomNumber());
  const countRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // dice animation triggered by every index change
    countRef.current = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current); // clear old interval
    }

    intervalRef.current = setInterval(() => {
      setNumber(randomNumber());
      countRef.current += 1;

      if (countRef.current >= 10) {
        clearInterval(intervalRef.current); // stop animation
        intervalRef.current = null;
        setNumber(index); // set final dice number
      }
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index, type]);

  const name =
    type === "sign" ? G.signSequence[number - 1] : G.planetSequence[number - 1];

  return <Icon name={name} />;
}
