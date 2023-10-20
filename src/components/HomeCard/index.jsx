import { Button, Card, Carousel, Space, Typography } from "antd";
import "./style.css";

const HomeCard = () => {
  const handleDeleteCard = () => {
    console.log(123);
  };
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
        Dubai, Các Tiểu Vương Quốc Ả Rập Thống Nhất
      </Typography.Title>
      <Space direction="vertical" style={{ textAlign: "start" }}>
        <Typography.Text>Cách 5.164km</Typography.Text>
        <Typography.Text>Ngày 18 - Ngày 23 tháng 11</Typography.Text>
      </Space>
      <Typography.Text>
        <span>$232</span>
        <span> / Đêm</span>
      </Typography.Text>
    </Card>
  );
};

export default HomeCard;
