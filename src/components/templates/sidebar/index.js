import React, { useEffect } from "react";
import { BaseColors } from "../../../utils";
import { Layout, Menu, Row, Button } from "antd";
import { useHistory } from "react-router-dom";
import { view } from "@risingstack/react-easy-state";
import * as store from "../store";
import { staticIcons } from "../../../utils/static";
import * as FontAwesome from "react-icons/fa";
const { Sider } = Layout;
const { SubMenu } = Menu;

export const AppSidebar = view(({}) => {
  const history = useHistory();
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [store]);
  return (
    <Sider
      trigger={null}
      style={styles.sider}
      collapsed={store.state.isCollapse}
    >
      <Row justify="center" align="middle" justify="center">
        <img src={staticIcons.ic_react} style={{ height: 80 }} />
      </Row>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        {store.state.menu.map((menu) => {
          const MyIcons = FontAwesome[menu.icon];
          if (menu.children == undefined) {
            return (
              <Menu.Item
                key={menu.id}
                onClick={() => store.GoTo({ route: menu.route, history })}
                icon={<MyIcons color="blue" size={24} />}
              >
                {menu.title}
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu
                key="sub1"
                icon={<MyIcons color="blue" size={24} />}
                title={
                  store.state.isCollapse ? (
                    ""
                  ) : (
                    <span style={styles.span}>{menu.title}</span>
                  )
                }
              >
                {menu.children.map((child) => {
                  const ChildIcons = FontAwesome[child.icon];
                  return (
                    <Menu.Item
                      key={child.id}
                      onClick={() =>
                        store.GoTo({ route: child.route, history })
                      }
                      icon={<ChildIcons color="blue" size={24} />}
                    >
                      {child.title}
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
  span: { marginLeft: 10 },
  sider: {
    minHeight: "100vh",
    backgroundColor: BaseColors.secondary,
    border: `0px solid ${BaseColors.border.primary}`,
    borderRightWidth: 1,
  },
};
