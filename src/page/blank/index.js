import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";
import { BaseColors } from "../../utils";
import * as store from "./store";
import { LoadingOverlay } from "../../components";
export default view(({}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [store]);
  return store.state.isLoading ? (
    <LoadingOverlay />
  ) : (
    <div style={styles.container}>
      <p>ini dashboard</p>
    </div>
  );
});

const styles = {
  container: {
    flex: 1,
    minHeight: "100vh",
  },
};
