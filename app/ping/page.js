"use client"; //INTERACTIVITY ACHIEVED - SPLOOSH
import { useState } from "react";
import Link from "next/link";
const Ping = () => {
  let [locX, setLocX] = useState();
  let [locY, setLocY] = useState();
  let [circles, setCircles] = useState([]);
  let [counter, setCounter] = useState(-1);
  // ping div keeps resetting, figure that out state needs to be persistent -- need a map
  const mouseController = (e) => {
    setLocX((prev) => {
      let x = e.pageX - 10 + "px";
      return x;
    });
    setLocY((prev) => {
      let y = e.pageY - 10 + "px"; // the numbers 10 help to center the div on the mouse cursor
      return y;
    });
    setCounter((prev) => counter++);
  };

  const newCircle = (e) => {
    let x = e.pageX.toString() + "px";
    let y = e.pageY.toString() + "px";
    const randomNumber = () => {
      return Math.random() * (255 - 1) + 1;
    };
    const mathColor =
      "rgb" +
      "(" +
      Math.floor(randomNumber()).toString() +
      ", " +
      Math.floor(randomNumber()).toString() +
      ", " +
      Math.floor(randomNumber()).toString() +
      ")";
    console.log(mathColor);
    let newCircle = (
      <div
        key={circles.length + 1}
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "10px",
          background: mathColor,
          position: "absolute",
          left: `${x}`,
          top: `${y}`,
        }}
      ></div>
    );

    let totalCircles = [...circles, newCircle];

    setCircles(totalCircles);
  };
  console.log(circles);

  return (
    <>
      <div
        style={{ width: "100vw", height: "80vh", border: "1px solid black" }}
        onMouseMove={mouseController}
        onClick={newCircle}
      >
        {locX ? (
          <div
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "10px",
              background: "black",
              position: "absolute",
              left: `${locX}`,
              top: `${locY}`,
            }}
          ></div>
        ) : null}
        {circles}
        Ping game test
      </div>
      <div>
        <Link href="/">
          <button>Go home</button>
        </Link>{" "}
        {/* testing putting a button in a new Link tag */}
      </div>
    </>
  );
};
//above div could be loc [loc.length - 1] but since i have a counter I just referenced the index through counter (initialized at -1)
export default Ping;
