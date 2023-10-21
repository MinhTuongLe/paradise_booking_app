/* eslint-disable no-unused-vars */
import { Button, Col, Row, Space } from "antd";
import HomeCard from "../../components/HomeCard";
import places_data from "../../mock-data/places.json";
import PlaceForm from "./components/Form";
import { useEffect, useState } from "react";
import { useGetIndexPlaceQuery } from "./apiSlice";
import axios from "axios";

const HomePage = () => {
  const [placeList, setPlaceList] = useState([]);

  const [formData, setFormData] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const { data, error } = useGetIndexPlaceQuery();
  // console.log(data);
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
    // Gửi yêu cầu GET đến API
    axios
      .get("http://localhost:8080/api/v1/places")
      .then((response) => {
        // Xử lý dữ liệu khi nhận được phản hồi từ API
        setPlaceList(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error:", error);
      });
  }, []);
  console.log(placeList);
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
