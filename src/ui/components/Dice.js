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
    // 每次 index 变化时重置动画
    countRef.current = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current); // 清理之前的定时器
    }

    intervalRef.current = setInterval(() => {
      setNumber(randomNumber());
      countRef.current += 1;

      if (countRef.current >= 10) {
        clearInterval(intervalRef.current); // 停止动画
        intervalRef.current = null;
        setNumber(index); // 设置最终值
      }
    }, 100);

    // 清理定时器
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
