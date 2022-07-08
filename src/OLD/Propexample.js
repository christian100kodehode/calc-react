export const PropExample = (props) => {
  const { headline, text, number1, number2 } = props;
  return (
    <section>
      <h1>{headline}</h1>
      <p>{text}</p>
      <p>
        Numbers: {number1} - {number2}
      </p>
      <br></br>
    </section>
  );
};
