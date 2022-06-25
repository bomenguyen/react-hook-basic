import React from "react";
import "./style.scss";
import useMagicColor from "../../hook/useMagicColor";

MagicBox.propTypes = {};

function MagicBox() {
  const color = useMagicColor();
  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
