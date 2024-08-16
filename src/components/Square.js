import React from "react";
import { useState } from "react";
export default function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    console.log("Clicked");

    setValue("X");
  }
  return (
    <>
      <div className="square">
        <button onClick={handleClick} className="square">
          {value}
        </button>
      </div>
    </>
  );
}
