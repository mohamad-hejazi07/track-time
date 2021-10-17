import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Timetracker({ onEndTime }) {
  const [time, setTime] = useState({ id: "", start: "", end: "" });
  const [startTimer, setStartTimer] = useState(false);
  const [counter, setCounter] = useState(1);
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");

  /*Update Time only if the Conditions are complete*/
  useEffect(() => {
    if (time.start && time.end) onEndTime({ id: uuidv4(), ...time, edit: false });
  }, [time]);

  useEffect(() => {
    let timer;

    if (startTimer) {
      timer = setInterval(() => {
        //Convert counter to Strng format (MM:SS)
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        const calcSecond = `${String("0" + secondCounter).slice(-2)}`;
        const calcMinute = `${String("0" + minuteCounter).slice(-2)}`;

        setSecond(calcSecond);
        setMinute(calcMinute);

        setCounter(counter + 1);
      }, 1000);
    } else {
      clearInterval(time);
      setCounter(1);
    }

    return () => {
      clearInterval(timer);
    };
  }, [startTimer, counter, time.start]);

  function handleSetTime() {
    if (!startTimer) {
      setStartTimer(true);
      setTime({ start: Date.now(), end: "" });
      setCounter(1);
      return;
    }
    setStartTimer(false);
    setTime({ ...time, end: Date.now() });
  }

  return (
    <div className="container">
      <button className={`button is-large is-fullwidth ${!startTimer ? "is-success" : "is-danger"}`} onClick={() => handleSetTime()}>
        {!startTimer ? "Start Time" : "End Time"}
      </button>
      <div className="is-flex is-justify-content-center">
        <h1 className="title is-1">
          {minute}:{second}
        </h1>
      </div>
    </div>
  );
}
