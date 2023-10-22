/* eslint-disable no-unused-vars */
import { Button, Col, Modal, Row, Space, notification } from "antd";
import HomeCard from "../../components/HomeCard";
import PlaceForm from "./components/Form";
import { useEffect, useState } from "react";
import { deletePlace, indexPlace, login } from "./apiSlice";

const HomePage = () => {
  const [placeList, setPlaceList] = useState([]);
  const [formData, setFormData] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const fetchData = async () => {
    try {
      const data = await indexPlace();
      setPlaceList(data);
    } catch (error) {
      console.error(error);
      notification.error({
        message: "Failed to fetch data",
      });
    }
  };

  const handleDeleteCard = async (id, name) => {
    try {
      const loginResponse = await login({
        email: "lamlklk2002@gmail.com",
        password: "123456",
      });

      const accessToken = loginResponse.data.accessToken;

      Modal.confirm({
        title: `Delete ${name}`,
        content: `Do you want to delete ${name}?`,
        centered: true,
        onOk: async () => {
          try {
            await deletePlace(id, accessToken);
            notification.success({
              message: `Delete place ${name} successfully!`,
            });
            fetchData();
          } catch (error) {
            console.error(error);
            notification.error({
              message: `Delete place ${name} failed!`,
            });
          }
        },
      });
    } catch (error) {
      console.error(error);
      notification.error({
        message: `Delete place ${name} failed!`,
      });
    }
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setFormData(undefined);
    fetchData();
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {placeList &&
          placeList.map((place, index) => (
            <Col span={4} key={index}>
              <HomeCard data={place} onDelete={handleDeleteCard} />
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
