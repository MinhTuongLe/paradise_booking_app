import { Col, Row } from "antd";
import HomeCard from "../../components/HomeCard";

const HomePage = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
      <Col span={4}>
        <HomeCard />
      </Col>
    </Row>
  );
};

export default HomePage;
