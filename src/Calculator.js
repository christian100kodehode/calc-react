import Calculatordata from "./Components/Calculatordata";
import "./App.css";
import Btn from "./Btn";

import { Button, SmallButton } from "./Components/Button.style";

function Calculator() {
  const Numberarray = Calculatordata.map((item) => {
    return <Btn number={item.number} key={item.id} backgroundcolor={item.backgroundcolor} color={item.color} className={item.className} />;
  });

  return <>{Numberarray}</>;
}

Calculator();

export default Calculator;
