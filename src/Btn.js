import { SmallButton } from "./Components/Button.style";

export default function Btn(props) {
  return (
    <>
      <SmallButton key={props.id} backgroundcolor={props.backgroundcolor} color={props.color}>
        {props.number}
      </SmallButton>
    </>
  );
}
