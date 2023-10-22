/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
// import { useGetPlaceByIdQuery } from "../Home/apiSlice";
import { Carousel, Col, Row, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { getPlaceById } from "../Home/apiSlice";

const PlaceDetailPage = () => {
  const params = useParams();

  const [placeDetail, setPlaceDetail] = useState(undefined);
  useEffect(() => {
    let isMounted = true;
    getPlaceById(params.id)
      .then((data) => {
        if (isMounted) {
          setPlaceDetail(data.data);
          console.log(data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      {placeDetail && (
        <Space
          direction="vertical"
          style={{ display: "flex", justifyItems: "flex-start" }}
        >
          <Typography.Title level={2} style={{ textAlign: "start" }}>
            {placeDetail.name}
          </Typography.Title>
          <Row gutter={12}>
            <Col span={12}>
              <Carousel autoplay autoplaySpeed={5000}>
                <div>
                  <img
                    alt="example"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    alt="example"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    alt="example"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    alt="example"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Carousel>
            </Col>
            <Col span={12}>
              <Row gutter={12}>
                <Col span={12}>
                  <div>
                    <img
                      alt="example"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div>
                    <img
                      alt="example"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                    <img
                      alt="example"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div>
                    <img
                      alt="example"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-53505989/original/607235e0-45d3-4450-b507-b9b0477d68d9.jpeg?im_w=1200"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Space
            direction="vertical"
            style={{ textAlign: "start", width: "100%" }}
          >
            <Typography.Text style={{ textAlign: "start", fontSize: 16 }}>
              {placeDetail.description}
            </Typography.Text>
            <Space size={[12, 12]}>
              <Typography.Text style={{ textAlign: "start", fontSize: 16 }}>
                {placeDetail.address}
              </Typography.Text>
              <Typography.Text style={{ textAlign: "start", fontSize: 16 }}>
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
