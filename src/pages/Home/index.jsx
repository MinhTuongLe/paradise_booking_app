import { Button, Col, Row, Space } from "antd";
import HomeCard from "../../components/HomeCard";
import places_data from "../../mock-data/places.json";
import PlaceForm from "./components/Form";
import { useState } from "react";

const HomePage = () => {
  const [formData, setFormData] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleDeletetCard = (name) => {
    console.log(name);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
    setFormData(undefined);
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  return (
    <>
      <Space
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 24,
        }}
      >
        <Button type="primary" onClick={handleOpenModal}>
          Add new
        </Button>
      </Space>
      <Row gutter={[16, 16]}>
        {places_data["places-data"].map((place, index) => (
          <Col span={4} key={index}>
            <HomeCard data={place} onDelete={handleDeletetCard} />
          </Col>
        ))}
      </Row>
      <PlaceForm
        title="Add New Place"
        open={isOpenModal}
        formData={formData}
        onCancel={handleCloseModal}
        onDone={handleCloseModal}
      />
    </>
  );
};

export default HomePage;
