import React from "react";
import { BaseColors } from "../../../utils";
import { Layout } from "antd";

const { Footer } = Layout;
export const AppFooter = ({}) => {
  return (
    <Footer style={styles.container}>
      <p>footer</p>
    </Footer>
  );
};

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: BaseColors.secondary,
    marginLeft: 5,
  },
};