import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";
import { BaseColors } from "../../utils";
import * as store from "./store";
import { LoadingOverlay } from "../../components";
import { Line, Area, Pie } from "@ant-design/charts";
import { Row, Col, Card } from "antd";
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
      <Row justify="space-between" style={{ width: "100%" }}>
        <Col span={12}>
          <Card title="Line Chart">
            <Line
              data={store.state.line_data}
              xField="year"
              yField="value"
              point={{ size: 2, shape: "circle" }}
              style={{ height: 200 }}
              xAxis={{ tickCount: 5 }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Line Chart Fill">
            <Area
              data={store.state.line_data}
              xField="year"
              yField="value"
              point={{ size: 2, shape: "circle" }}
              style={{ height: 200 }}
              xAxis={{ tickCount: 5 }}
            />
          </Card>
        </Col>
      </Row>
      <Row justify="space-between" style={{ width: "100%" }}>
        <Col span={12}>
          <Card title="Line Chart 3 Data">
            <Line
              data={store.state.line_three_data}
              xField="year"
              yField="value"
              seriesField="series"
              style={{ height: 200 }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Line Chart Fill 3 Data">
            <Area
              data={store.state.line_three_data}
              xField="year"
              yField="value"
              seriesField="series"
              style={{ height: 200 }}
            />
          </Card>
        </Col>
      </Row>
      <Row justify="space-between" style={{ width: "100%" }}>
        <Col span={12}>
          <Card title="Pie Chart">
            <Pie
              data={store.state.pie_data}
              appendPadding={10}
              angleField="value"
              colorField="type"
              radius={0.9}
              label={{
                type: "inner",
                offset: "-30%",
                content: function content(_ref) {
                  var percent = _ref.percent;
                  return "".concat(percent * 100, "%");
                },
                style: {
                  fontSize: 14,
                  textAlign: "center",
                },
                interactions: [{ type: "element-active" }],
              }}
              style={{ height: 200 }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Pie Chart">
            <Pie
              data={store.state.pie_data}
              appendPadding={10}
              angleField="value"
              colorField="type"
              radius={0.9}
              style={{ height: 200 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
});

const styles = {
  container: {
    flex: 1,
    minHeight: "100vh",
  },
};
