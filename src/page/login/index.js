import React, { useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Form, Input, Button, Row, Col, Card, Modal } from "antd";
import localforage from "localforage";
import { BaseTheme } from "../../utils";
import * as Store from "./store";
import { view } from "@risingstack/react-easy-state";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const tailLayout = {
  wrapperCol: {
    //offset: 0,
    span: 24,
  },
};

const { error } = Modal;

export default view(() => {
  let history = useHistory();

  useEffect(() => {
    Store.initialized();
    return () => {
      Store.cleanUp();
    };
  }, [Store]);
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col>
          <Card
            style={{
              width: 400,
              margin: "auto",
              boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
            }}
          >
            <Row
              justify="space-between"
              align="middle"
              style={{ width: "100%" }}
            >
              <h2>Sign In</h2>
              <img
                src={BaseTheme.staticIcons.ic_react}
                style={{ height: 30 }}
              />
            </Row>
            <div
              style={{
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt="example"
                src={BaseTheme.staticIcons.ic_react}
                style={{ height: 80 }}
              />
            </div>
            <div>
              <Form
                {...layout}
                name="basic"
                onFinish={(values) => Store.doLogin({ values, history })}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" block>
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <Row>
              <Col span={24} style={{ textAlign: "center" }}>
                Copyright &copy; 2021
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
});
