/* eslint-disable react/prop-types */
import { Button, Card, Carousel, Space, Typography } from "antd";
import "./style.css";

const HomeCard = ({ data, onDelete }) => {
  const { name, address, description, pricePerNight } = data;
  const handleDeleteCard = () => {
    onDelete(name);
  };

  // console.log(data);

  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      headStyle={{ textAlign: "left" }}
      bodyStyle={{ textAlign: "left" }}
      cover={
        <div style={{ position: "relative" }}>
          <Carousel autoplay autoplaySpeed={5000}>
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </Carousel>
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
      <Typography.Title level={5} ellipsis>
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
