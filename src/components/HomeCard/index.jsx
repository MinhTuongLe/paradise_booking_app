/* eslint-disable react/prop-types */
import { Button, Card, Carousel, Space, Typography } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
import { RouteKey, rc } from "../../routes";

const HomeCard = ({ data, onDelete }) => {
  const { id, name, address, description, pricePerNight } = data;

  const handleDeleteCard = () => {
    onDelete(id, name);
  };

  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      headStyle={{ textAlign: "left" }}
      bodyStyle={{ textAlign: "left", padding: 12 }}
      cover={
        <div style={{ position: "relative" }}>
          <Link to={rc(RouteKey.PlaceDetail).pather(id)} target="_blank">
            <Carousel autoplay autoplaySpeed={5000}>
              <img
                alt="example"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
              />
              <img
                alt="example"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
              />
              <img
                alt="example"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
              />
              <img
                alt="example"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
              />
            </Carousel>
          </Link>
          <Button
            type="primary"
            danger
            shape="circle"
            style={{ width: 32, position: "absolute", right: 8, top: 8 }}
            onClick={handleDeleteCard}
          >
            X
          </Button>
        </div>
      }
    >
      <Typography.Title level={5} ellipsis style={{ margin: 0 }}>
        {name}
      </Typography.Title>
      <Space direction="vertical">
        <Space direction="vertical">
          <Typography.Text>{address}</Typography.Text>
          <Typography.Text>{description}</Typography.Text>
        </Space>
        <Typography.Text>
          <span>${pricePerNight}</span>
          <span> / Đêm</span>
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default HomeCard;
