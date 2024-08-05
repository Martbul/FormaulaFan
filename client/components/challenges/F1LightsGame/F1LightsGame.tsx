"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const F1LightsGame = () => {
  const [lights, setLights] = useState([false, false, false, false, false]);
  const [greenLights, setGreenLights] = useState([false, false, false, false, false]);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timerHasStarted, setTimerHasStarted] = useState(false);

  const startTimer = () => {
    // Clear any existing interval before starting a new one
    if (intervalId) clearInterval(intervalId);

    const start = Date.now();
    const id = setInterval(() => {
      setTimer(((Date.now() - start) / 1000).toFixed(3));
    });

    setIntervalId(id);
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleStopF1Lights = () => {
    stopTimer();
    setTimerHasStarted(false);
  };

  //! implement FOUL START
  //! Implement green lights
  const handleSartNewGame = () => {
    setTimer(0);
    setTimerHasStarted(true);
    let lightIndex = -1;
    const lightIntervalMilliseconds = Math.floor(Math.random() * 650) + 350;

    if (intervalId) clearInterval(intervalId);
    // Define the interval for turning on lights
    const lightInterval = setInterval(() => {
      if (lightIndex < 4) {
        setLights((prev) => {
          const newLights = [...prev];
          newLights[lightIndex] = true;
          return newLights;
        });
        lightIndex++;
      } else {
        clearInterval(lightInterval);
        setLights([false, false, false, false, false]);
        startTimer(); // Start the timer after lights turn off
      }
    }, lightIntervalMilliseconds);

    setIntervalId(lightInterval);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-center">
        <p className="text-6xl font-bold	text-neutral-100 font-mono">
          F1 Race Start
        </p>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {lights.map((light, index) => (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: light ? "red" : "grey",
                borderRadius: "50%",
              }}
            ></div>
          ))}
          </div>
           <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {greenLights.map((light, index) => (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: light ? "green" : "grey",
                borderRadius: "50%",
              }}
            ></div>
          ))}
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h1 className="text-xl text-neutral-200">{timer} seconds</h1>
          {timerHasStarted ? (
            <Button
              className="outline-1 bg-neutral-950 text-neutral-200 hover:bg-zinc-800"
              onClick={handleStopF1Lights}
            >
              Stop{" "}
            </Button>
          ) : (
            <Button
              className="bg-red-700 hover:bg-red-800"
              onClick={handleSartNewGame}
            >
              Start
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default F1LightsGame;
