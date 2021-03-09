import React from "react";
import { view } from "@risingstack/react-easy-state";
import { BaseColors } from "../../utils";

export default view(({}) => {
  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
        backgroundColor: BaseColors.icon.active,
      }}
    >
      <p>ini dashboard</p>
    </div>
  );
});
