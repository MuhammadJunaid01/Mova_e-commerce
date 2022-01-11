import React from "react";
import { useEffect, useState } from "react";
import "./allProducts.css";
import { Col, Row } from "antd";
const AllProducts = () => {
  const [collections, setCollections] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?fbclid=IwAR3ZMVV2vZ9CII0iOLbM6k9tgXZ9HMEvn6ekgsHaCgHfNhKp_27_cTJs8uA"
    )
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <div>
      <div className="collectionContainer">
        {/* {collections.map((collection, index) => (
          <div key={index} className="collectionItem">
            <div className="collectionBanner">
              <img src={collection.picture} alt="" />
            </div>
            <div className="collectionInfo">
              <h1>{collection.displayName}</h1>
              <h3>{collection.categoryId}</h3>
            </div>
          </div>
        ))} */}
        <Row gutter={[16, 16]}>
          {collections.map((collection, index) => (
            <Col key={index} xs={{ span: 24 }} lg={{ span: 6 }}>
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

export default AllProducts;
