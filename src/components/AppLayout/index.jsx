import { ConfigProvider, Layout } from "antd";
import enUS from "antd/es/calendar/locale/en_US";
import Header from "../Header";

const AppLayout = () => {
  return (
    <ConfigProvider locale={enUS}>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
