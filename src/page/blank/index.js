import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";
import * as store from "./store";
export default view(({}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [store]);
  return (
    <div style={styles.container}>
      <p>ini blank</p>
    </div>
  );
});

const styles = {
  container: {
    flex: 1,
    minHeight: "100vh",
  },
};
