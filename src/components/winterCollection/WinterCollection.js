import { Alert, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Spin } from "antd";

const WinterCollection = () => {
  const [winter, setWinter] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?fbclid=IwAR0a2rowVYVgYlw0E7sf6AaRArNycO8Ylm1QOZd0pGrHRd3Ify2tOMq7l-E"
    )
      .then((res) => res.json())
      .then((data) => setWinter(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }, []);
  const found = winter.filter((result) => result.collectionId === "winter2020");
  console.log("fond", found);
  return loader ? (
    <div style={{ textAlign: "center", fontSize: "60px", padding: "30px" }}>
      <Spin style={{ fontSize: "22px" }} tip="Loading...">
        <Alert />
      </Spin>
    </div>
  ) : (
    <div>
      <div className="collectionContainer">
        <Row gutter={[16, 16]}>
          {found.map((collection, index) => (
            <Col
              key={index}
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
            >
              <div className="collectionBanner">
                <img src={collection.picture} alt="" />
              </div>
              <div className="collectionInfo">
                <h1>{collection.displayName}</h1>
                <h3>{collection.categoryId}</h3>
                <h3>${collection.originalPrice}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WinterCollection;
