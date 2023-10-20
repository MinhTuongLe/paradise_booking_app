import { Col, Row } from "antd";
import HomeCard from "../../components/HomeCard";
import places_data from "../../mock-data/places.json";
import Header from "../../components/Header";

const HomePage = () => {
  const handleDeletetCard = (name) => {
    console.log(name);
  };
  return (
    <>
      <Header />
      <Row gutter={[16, 16]}>
        {places_data["places-data"].map((place, index) => (
          <Col span={4} key={index}>
            <HomeCard data={place} onDelete={handleDeletetCard} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
