import React from "react";
import { useState } from "react";

function Practice() {
  const [isActivated, setIsActivated] = useState(false);
  const activate = () => {
    setIsActivated(!isActivated);
  };
  return (
    <div className='${isActivated ? "bg-black" : "bg-white"}'>
      <button onClick={activate}>Press here</button>

      <div>
        {isActivated && <p>The power is now {isActivated ? "ON" : "OFF"}</p>}
        <p>The power is {isActivated ? "" : "OFF"}</p>
      </div>
    </div>
  );
}

export default Practice;
