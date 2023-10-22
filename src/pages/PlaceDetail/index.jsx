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
        <Space direction="vertical">
          <Typography.Title level={3} style={{ textAlign: "start" }}>
            {placeDetail.name}
          </Typography.Title>
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
          <Space
            direction="vertical"
            style={{ textAlign: "start", width: "100%" }}
          >
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
