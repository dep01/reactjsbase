import React from "react";
import { AppHeader } from "./header";
import { AppFooter } from "./footer";
import AppContent from "./content";
import { Layout, Card, Col } from "antd";
import { AppSidebar } from "./sidebar";
import { view } from "@risingstack/react-easy-state";
import { BaseColors } from "../../utils";

export default view(({}) => {
  return (
    <Layout style={styles.container}>
      <AppSidebar />
      <Layout style={styles.container}>
        <AppHeader />
        <Layout style={styles.containerContent}>
          <AppContent />
        </Layout>
        <AppFooter />
      </Layout>
    </Layout>
  );
});

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: BaseColors.primary,
  },
  containerContent: {
    minHeight: "100vh",
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: "blue",
    padding: 20,
  },
};
