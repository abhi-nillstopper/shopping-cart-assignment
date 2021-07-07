import React from "react";
import { Image, Button } from "react-bootstrap";

export default function ProductCategory(props) {
  const categoryImages = props.categoryImages;

  return (
    <>
      <div className="product-categories">
        {categoryImages.map((img, index) => {
          return (
            <div key={img.key} className="category">
              <Image src={img.imageUrl} />
              <div className="description">
                <h2>{img.name}</h2>
                <h6>{img.description}</h6>
                <Button variant="danger">{img.key}</Button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
