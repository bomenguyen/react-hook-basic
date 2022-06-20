import React, { useState } from "react";
import "./style.scss";
import PropTypes from "prop-types";

ColorBox.propTypes = {};
function getRandomColor() {
  const colorList = ["red", "blue", "yellow", "deeppink"];
  const randamIndex = Math.trunc(Math.random() * 4);
  return colorList[randamIndex];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    console.log(initColor);
    return initColor;
  });

  function handleBoxColor() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxColor}
    >
      ColorBox
    </div>
  );
}

export default ColorBox;
