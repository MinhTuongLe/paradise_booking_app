import { Card, Carousel, Space, Typography } from "antd";

const HomeCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      cover={
        <Carousel>
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
