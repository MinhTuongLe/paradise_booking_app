/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetPlaceByIdQuery } from "../Home/apiSlice";
import { Carousel, Col, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";

const PlaceDetailPage = () => {
  const params = useParams();
  console.log(params.id);
  const { data } = useGetPlaceByIdQuery({
    id: params.id,
  });
  const [placeDetail, setPlaceDetail] = useState();
  useEffect(() => {
    if (data) {
      setPlaceDetail(data.data);
    }
  }, [data]);
  console.log(placeDetail);
  return (
    <>
      {placeDetail && (
        <Space direction="vertical">
          <Typography.Title level={3} style={{ textAlign: "start" }}>
            {placeDetail.name}
          </Typography.Title>
          {/* <div>
            <Space>
              <Carousel
                autoplay
                autoplaySpeed={5000}
                style={{ width: "300px", height: "300px" }}
              >
                <div>
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Carousel>
            </Space>
          </div> */}
          <Space>
            <Carousel
              autoplay
              autoplaySpeed={5000}
              style={{ width: "300px", height: "300px" }}
            >
              <div>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div>
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
            </Carousel>
          </Space>
          <Space direction="vertical" style={{ textAlign: "start" }}>
            <Typography.Text level={3} style={{ textAlign: "start" }}>
              {placeDetail.description}
            </Typography.Text>
            <Space size={[12, 12]}>
              <Typography.Text level={3} style={{ textAlign: "start" }}>
                {placeDetail.address}
              </Typography.Text>
              <Typography.Text level={3} style={{ textAlign: "start" }}>
                {placeDetail.pricePerNight} / Đêm
              </Typography.Text>
            </Space>
          </Space>
        </Space>
      )}
    </>
  );
};

export default PlaceDetailPage;
