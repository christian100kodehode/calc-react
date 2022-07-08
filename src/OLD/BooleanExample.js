import React, { useState } from "react";
import { TEXT1, TEXT2 } from "./TextContent";

const BoolianExample = () => {
  const [boolian, Setboolian] = useState(true);

  return (
    <div>
      <p>{boolian ? TEXT1 : TEXT2}</p>
      <button onClick={() => Setboolian(!boolian)}>Change Me</button>
    </div>
  );
};

export default BoolianExample;
