import { useEffect, useRef, useState } from "react";

function randomColor(currentColor) {
  const color_list = ["red", "pink", "blue"];
  const currentIndex = color_list.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }

  return color_list[newIndex];
}
function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  // change color every 1 second
  useEffect(() => {
    const colorInterVal = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterVal);
    };
  }, []);
  return color;
}

export default useMagicColor;
