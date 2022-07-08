import { PropExample } from "./Propexample";

const PropsExample = (props) => {
  return (
    <div>
      <PropExample headline="Title one" text="Text one" number1="1" number2="2" />
      <PropExample headline="Title two" text="Text two" number1="3" number2="4" />
      <PropExample headline="Title three" text="Text three" number1="5" number2="6" />
    </div>
  );
};

export default PropsExample;
