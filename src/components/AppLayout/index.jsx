import { ConfigProvider, Layout } from "antd";
import enUS from "antd/es/calendar/locale/en_US";
// import Header from "./Header";
import Content from "./Content";

const AppLayout = (props) => {
  return (
    <ConfigProvider locale={enUS}>
      <Layout>
        {/* <Layout.Header style={{ backgroundColor: "#fff" }}>
          <Header />
        </Layout.Header> */}
        <Layout.Content style={{ height: "100vh", padding: 32 }}>
          <Content {...props} />
        </Layout.Content>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
