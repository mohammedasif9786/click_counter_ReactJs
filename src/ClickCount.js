import './Index.css'
import { useState } from 'react';

function ClkCount() {
  const [firstClick, setCount] = useState(0);

  return (
  <div id="outer">
  <h1 id="head"><u>Click Counter</u></h1>
    <div id="main">
      <h3 id="value"><u>{firstClick}</u></h3>
      <div id="btn">
        <button id="btn1" onClick={() => setCount(firstClick + 1)}>Click</button>
        <button id="btn2" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
    </div>
  );
}

export default ClkCount;
