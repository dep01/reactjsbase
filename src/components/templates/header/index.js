import React from "react";
import {BaseTheme} from "../../../utils";
import { Layout, Button } from "antd";
import * as store from "../store";
import { view } from "@risingstack/react-easy-state";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
export const AppHeader = view(({}) => {
  return (
    <Header style={styles.container}>
      <Button
        type="primary"
        onClick={() => store.toggleCollapsed()}
        style={{ marginLeft: -50, backgroundColor: BaseTheme.baseColor.icon.unactive }}
      >
        {React.createElement(
          store.state.isCollapse ? MenuUnfoldOutlined : MenuFoldOutlined
        )}
      </Button>
    </Header>
  );
});

const styles = {
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: BaseTheme.baseColor.icon.unactive,
    marginBottom: 5,
  },
};
