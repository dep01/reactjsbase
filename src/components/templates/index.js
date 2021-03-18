import React from "react";
import { AppHeader } from "./header";
import { AppFooter } from "./footer";
import AppContent from "./content";
import { Layout } from "antd";
import { AppSidebar } from "./sidebar";
import { view } from "@risingstack/react-easy-state";
import { BaseTheme, GlobalStore } from "../../utils";
import { LoadingOverlay } from "../loadingoverlay";

export default view(({}) => {
  return (
    <Layout style={styles.container}>
      <AppSidebar />
      <Layout style={styles.container}>
        <AppHeader />
        <Layout style={styles.containerContent}>
          <AppContent />
          <LoadingOverlay
            isLoading={GlobalStore.state.isLoading}
            width="85%"
            top={70}
          />
        </Layout>
        <AppFooter />
      </Layout>
    </Layout>
  );
});

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: BaseTheme.baseColor.secondary,
  },
  containerContent: {
    minHeight: "100%",
    maxWidth: "100%",
    display: "flex",
    backgroundColor: BaseTheme.baseColor.secondary,
    marginLeft: 5,
    border: `1px solid ${BaseTheme.baseColor.border.primary}`,
    borderRightWidth: 0,
    padding: 20,
  },
};
