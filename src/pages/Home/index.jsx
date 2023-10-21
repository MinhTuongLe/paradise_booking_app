/* eslint-disable no-unused-vars */
import { Button, Col, Row, Space } from "antd";
import HomeCard from "../../components/HomeCard";
import PlaceForm from "./components/Form";
import { useEffect, useState } from "react";
import { useGetIndexPlaceQuery } from "./apiSlice";

const HomePage = () => {
  const [placeList, setPlaceList] = useState([]);
  const [formData, setFormData] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data, error } = useGetIndexPlaceQuery();

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
  useEffect(() => {
    if (data) {
      setPlaceList(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) console.log(error);
  });

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
        {placeList.map((place, index) => (
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
