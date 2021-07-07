import React, { useState, useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import ProductCategory from "./product_category";
import { importAll } from "../../helper/import_all";
import api from "../../helper/axios_api";
import "./home_page.scss";

export default function HomePage(props) {
  const [OfferImages, setOfferImages] = useState([]);
  const [categoryImages, setCategoryImages] = useState([]);

  const fetchOfferImages = async () => {
    try {
      const response = await api.get("/banners");
      setOfferImages(response.data.banners);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchcategoryImages = async () => {
    try {
      const response = await api.get("/categories");
      setCategoryImages(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOfferImages();
    fetchcategoryImages();
  }, []);

  // const OfferImages = importAll(
  //   require.context(
  //     "../../../static/images/offers",
  //     false,
  //     /\.(png|jpe?g|svg)$/
  //   )
  // );

  return (
    <>
      <div className="home-container">
        <Carousel fade>
          {OfferImages.map((ofImg, index) => {
            return (
              <Carousel.Item key={index} interval={2000}>
                <Image
                  className="d-block w-100"
                  src={ofImg.bannerImageUrl}
                  alt={ofImg.bannerImageAlt}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <ProductCategory categoryImages={categoryImages} />
      </div>
    </>
  );
}
