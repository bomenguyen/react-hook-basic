import React from "react";
import "./style.scss";
import useClock from "../../hook/useClock";

BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();

  return (
    <div className="better-clock">
      <p className="better-clock_time">{timeString}</p>
    </div>
  );
}

export default BetterClock;
