"use client"; //INTERACTIVITY ACHIEVED - SPLOOSH
import { useState } from "react";
import Link from "next/link";
const Ping = () => {
  let [locX, setLocX] = useState("");
  let [locY, setLocY] = useState("");
  const onClickHandler = (e) => {
    setLocX((prev) => {
      let x = e.pageX + "px";
      return x;
    });
    setLocY((prev) => {
      let y = e.pageY + "px";
      return y;
    });
  };

  return (
    <>
      <div
        style={{ width: "100vw", height: "80vh", border: "1px solid black" }}
        onClick={onClickHandler}
      >
        {locX || locY ? (
          <div
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "10px",
              background: "black",
              position: "absolute",
              left: `${locX}`,
              top: `${locY}`,
              zIndex: "-1000",
            }}
          ></div>
        ) : null}
        Ping game test
      </div>
      <div>
        <Link href="/"><button>Go home</button></Link> {/* testing putting a button in a new Link tag */}
      </div>
    </>
  );
};

export default Ping;
