import React from "react";
import { BaseColors } from "../../../utils";
import { Layout } from "antd";

const { Header } = Layout;
export const AppHeader = ({}) => {
  return (
    <Header style={styles.container}>
      <p>header</p>
    </Header>
  );
};

const styles = {
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: BaseColors.icon.unactive,
    marginBottom: 5,
  },
};
