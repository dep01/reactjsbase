import React, { useEffect } from "react";
import { VscLoading } from "react-icons/vsc";
import * as store from "./store";
import { view } from "@risingstack/react-easy-state";
export const LoadingOverlay = view(
  ({ isLoading = false, width = "100%", top = 0 }) => {
    useEffect(() => {
      store.initialized();
      return () => {
        store.cleanUp();
      };
    }, [store]);
    return isLoading ? (
      <div
        style={{
          // backgroundColor: "blue",
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "absolute",
          flexGrow: 0,
          flexShrink: 1,
          flexBasis: "auto",
          width: width,
          height: "100%",
          cursor: "wait",
          right: 0,
          top: top,
        }}
      >
        <VscLoading
          size={50}
          style={{ transform: `rotate(${store.state.deg}deg)` }}
        />
      </div>
    ) : null;
  }
);
const styles = {
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    position: "absolute",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    width: "85%",
    cursor: "wait",
    right: 0,
  },
};
