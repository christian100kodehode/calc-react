import React, { useState, useEffect } from "react";

export function Number() {
  const [number, setNumber] = useState(0);
  const [boolian, setboolian] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [number]);

  if (boolian) {
    return (
      <div>
        <p>All three functions</p>
        <p>{number}</p>
        <button onClick={() => setNumber(number + 1)}> + </button>
        <button onClick={() => setNumber(number - 1)}> - </button>
        <button onClick={() => setNumber(0)}>Reset Count</button>
        <button onClick={() => setboolian(!boolian)}> True/False </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Not true</p>
        <button onClick={() => setboolian(!boolian)}> True/False </button>
      </div>
    );
  }
}

export function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked</p>
      <p>{count} times</p>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}

export function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNumber((number) => number + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [number]);

  return (
    <div>
      <p>Autocounter</p>
      <p>{number}</p>
    </div>
  );
}

// OLD CODE

//   const Autocount = () => {
//     setTimeout(() => {
//       setNumber(number + 1);
//     }, 1000);
//   };

//   useEffect(() => {
//     Autocount();
//   }, [number]);

// export function Autocounter() {
//   const [number, setNumber] = useState(0);

//   const autocount = () => {
//     setTimeout(() => {

//       setNumber(number + 1);
//     }, 1000);
//   };

//   useEffect(() => {
//     autocount();
//   }, [number]);

//   return (
//     <div>
//       <p>Autocounter</p>
//       <p>{number}</p>
//     </div>
//   );
// }
