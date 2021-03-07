import React, { useEffect } from "react";
import { BaseColors } from "../../../utils";
import { Layout, Menu, Row, Typography, Col } from "antd";
import { useHistory } from "react-router-dom";

import { view } from "@risingstack/react-easy-state";
import * as store from "./store";
import { staticIcons } from "../../../utils/static";

const { Sider } = Layout;
const { SubMenu } = Menu;

export const AppSidebar = view(({}) => {
  const history = useHistory();
  function GoTo(page) {
    history.push(`/${page}`);
  }
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [store]);
  return (
    <Sider
      trigger={null}
      style={{ minHeight: "100vh", backgroundColor: BaseColors.secondary }}
    >
      <Row justify="center" align="middle" justify="center">
        <img src={staticIcons.ic_react} style={{ height: 80 }} />
      </Row>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        inlineCollapsed={true}
        defaultOpenKeys={["sub4", "sub5"]}
      >
        {store.state.menu.map((menu) => {
          if (menu.children == undefined) {
            return (
              <Menu.Item key={menu.id} onClick={() => GoTo(menu.route)}>
                {menu.icon}
                <span>{menu.title}</span>
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu
                key={menu.id}
                title={
                  <span>
                    {menu.icon}
                    <span>{menu.title}</span>
                  </span>
                }
              >
                {menu.children.map((child) => {
                  return (
                    <Menu.Item key={child.id} onClick={() => GoTo(child.route)}>
                      {child.icon}
                      <span>{child.title}</span>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>
    </Sider>
  );
});

const styles = {
  container: {
    width: 150,
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: BaseColors.icon.active,
  },
};
