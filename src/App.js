import Calculator from "./Calculator";
import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  // These strings are the operator signs
  const ops = [`/`, `*`, `+`, `-`, `.`];

  const updateCalc = (value) => {
    // Limit only 1 operator at a time, no ++ or similar allowed
    if ((ops.includes(value) && calc === ``) || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      return;
    }
    setCalc(calc + value);

    // use eval to calculate whatever is in the calc + value strings, need to be strings
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    // Make the number buttons, start on 9 and go to 1, also add the onClick event for each button
    const digits = [];

    for (let i = 9; i > 0; i--) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  // Delete last entered number, -1 to get to the last item, slice it away
  const deletelast = () => {
    if (calc === ``) {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
    {
      // Also update the result value if it is sliced, else it will show whatever was before hitting the DEL button
      if (ops.includes(value.slice(-1))) {
        setResult(eval(value.toString().slice(0, -1)));
      } else {
        setResult(eval(value.toString()));
      }
    }
  };

  const rstButton = () => {
    if (calc === ``) {
      return;
    }
    const value = calc.slice(-1, -1);
    // console.log(value);
    setCalc(value);
    {
      // Also update the result value if the Rst button have been pressed, else it will show whatever was before hitting the Rst button
      if (ops.includes(value.slice(-1, -1))) {
        setResult(eval(value.toString().slice(-1, -1)));
      } else {
        setResult(eval(value.toString()));
      }
    }
  };

  return (
    <div className="firstcalc">
      <div className="main">
        <h2>calc</h2>
        <p>THEME</p>
        <p className="selector">1 2 3</p>
        <div className="button"></div>
        <div className="switcher"></div>
        <div className="display"></div>
        <div className="numbercsontainer">
          <div className="container">
            <Calculator />
            <div className="anothertry">
              <div className="calculator2">
                <h2 className="calcText">calc</h2>
                <p>THEME</p>
                <p className="selector">1 2 3</p>
                <div className="button"></div>
                <div className="switcher"></div>
                <div className="display2">
                  {result ? <span className="displaytext">({result})</span> : ``}
                  <span className="displaytext2">{calc || "0"}</span>
                </div>
                <div className="digitscsontainer">
                  <div className="operators">
                    <button className="delBtn" onClick={deletelast}>
                      DEL
                    </button>
                    <button onClick={() => updateCalc(`+`)}>+</button>
                    <button onClick={() => updateCalc(`-`)}>-</button>
                    <button onClick={() => updateCalc(`*`)}>x</button>
                  </div>
                  <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc(`.`)}>.</button>
                    <button onClick={() => updateCalc(`0`)}>0</button>
                    <button onClick={() => updateCalc(`/`)}>/</button>
                    <button className="resetBtn" onClick={rstButton}>
                      Rst
                    </button>
                    <button className="equalBtn" onClick={calculate}>
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
