import { useState, useEffect } from "react";

function formDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formDate(now);

      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log("clock clear");
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
