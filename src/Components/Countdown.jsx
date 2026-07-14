import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate , className }) => {
  const calculateTime = () => {
    const difference = new Date(targetDate) - new Date();

    let time = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      time = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(
          Math.floor((difference / 1000 / 60) % 60)
        ).padStart(2, "0"),
        seconds: String(
          Math.floor((difference / 1000) % 60)
        ).padStart(2, "0"),
      };
    }

    return time;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex items-center gap-4 font-semibold ${className}`}>
      
      {/* Days */}
      <div className="text-center">
        <p className="text-sm text-black font-pop">Days</p>
        <p className="text-3xl font-bold font-inter">{timeLeft.days}</p>
      </div>

      <span className="text-red-400 text-3xl">:</span>

      {/* Hours */}
      <div className="text-center">
        <p className="text-sm text-black font-pop">Hours</p>
        <p className="text-3xl font-bold font-inter">{timeLeft.hours}</p>
      </div>

      <span className="text-red-400 text-3xl">:</span>

      {/* Minutes */}
      <div className="text-center">
        <p className="text-sm text-black font-pop">Minutes</p>
        <p className="text-3xl font-bold font-inter">{timeLeft.minutes}</p>
      </div>

      <span className="text-red-400 text-3xl">:</span>

      {/* Seconds */}
      <div className="text-center">
        <p className="text-sm text-black font-pop">Seconds</p>
        <p className="text-3xl font-bold font-inter">{timeLeft.seconds}</p>
      </div>

    </div>
  );
};

export default Countdown;