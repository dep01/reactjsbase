import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";
import * as store from "./store";
import { Line, Area, Pie, Radar } from "@ant-design/charts";
import { Row, Col, Card } from "antd";
import { LoadingOverlay } from "../../components";
export default view(({}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [store]);
  return (
    <div style={styles.container}>
      <Row justify="space-between" style={{ width: "100%" }}>
        <Col span={12}>
          <Card title="Line Chart">
            <LoadingOverlay isLoading={store.state.isLoadingLine} />
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
          <Card title="Status Point">
            <LoadingOverlay isLoading={store.state.isLoadingLine} />

            {/* <Area
              data={store.state.line_data}
              xField="year"
              yField="value"
              point={{ size: 2, shape: "circle" }}
              style={{ height: 200 }}
              xAxis={{ tickCount: 5 }}
            /> */}
          </Card>
        </Col>
      </Row>
      <Row justify="space-between" style={{ width: "100%" }}>
        <Col span={12}>
          <Card title="Line Chart 3 Data">
            <LoadingOverlay isLoading={store.state.isLoadingThreeLine} />
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
            <LoadingOverlay isLoading={store.state.isLoadingThreeLine} />
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
            <LoadingOverlay isLoading={store.state.isLoadingPie} />

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
            <LoadingOverlay isLoading={store.state.isLoadingPie} />

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
