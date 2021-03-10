import React, { useEffect } from "react";
import { VscLoading } from "react-icons/vsc";
import { BaseColors } from "../../utils";
import * as store from "./store";
import { view } from "@risingstack/react-easy-state";
export const LoadingOverlay = view(({}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [store]);
  return (
    <div style={styles.container}>
      <VscLoading
        size={50}
        style={{ transform: `rotate(${store.state.deg}deg)` }}
      />
    </div>
  );
});
const styles = {
  container: {
    height: "100vh",
    backgroundColor: BaseColors.secondary,
    alignItems: "center",
    justifyContent: "center",
    display: "inline-flex",
  },
};
