import styled from "styled-components";

// export const Button = styled.button`
//   width: 200px;
//   height: 50px;
//   background-color: ${(props) => props.backgroundColor};

//   &:hover {
//     background-color: aqua;
//   }

//   &:active {
//     background-color: black;
//   }
// `;

export const SmallButton = styled.button`
  font-family: "League Spartan", sans-serif;
  font-size: 32px;
  color: hsl(221, 14%, 31%);
  text-align: center;
  width: 80px;
  height: 45px;
  border-radius: 5px;
  font-weight: 700;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};
  padding: 5px;

  &:hover {
    transform: scale(95%);
  }

  &:active {
    background-color: #1b1d34;
  }
`;
// export const digitBtn = styled.button`
//   font-family: "League Spartan", sans-serif;
//   font-size: 32px;
//   color: hsl(221, 14%, 31%);
//   text-align: center;
//   width: 80px;
//   height: 45px;
//   border-radius: 5px;
//   font-weight: 700;
//   background-color: hsl(30, 25%, 89%);
//   padding: 5px;

//   &:hover {
//     transform: scale(95%);
//   }

//   &:active {
//     background-color: #1b1d34;
//   }
// `;
