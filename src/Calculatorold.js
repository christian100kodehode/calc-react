const Btn = () => {
  const MappedNumber = numbersForCalc.map((item) => {
    return (
      //   <button number={item.number} key={item.id} backgroundColor={item.backgroundColor} color={item.color}>
      //     {item.number}
      <button>{numbers.number} </button>
    );
  });
};

Btn();

export default Btn;
