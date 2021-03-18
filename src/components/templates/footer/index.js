import React from "react";
import { BaseTheme } from "../../../utils";
import { Layout } from "antd";

const { Footer } = Layout;
export const AppFooter = ({}) => {
  return (
    <Footer style={styles.container}>
      <p>&copy;dep01 reactjs baseproject</p>
    </Footer>
  );
};

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: BaseTheme.baseColor.secondary,
    marginLeft: 5,
  },
};
