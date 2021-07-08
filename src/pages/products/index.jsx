import React, { useEffect, useState } from "react";
import api from "../../helper/axios_api";
import { CategoriesDropdown } from "../../constant/categories";
import CardComponent from "../../components/card";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./products_page.scss";

export default function ProductsPage(props) {
  const [products, setProducts] = useState([]);
  const [radioValue, setRadioValue] = useState("");

  useEffect(() => {
    const { categoryKey } = props.location.state;
    setRadioValue(categoryKey);
  }, []);

  useEffect(() => {
    fetchProducts(radioValue);
  }, [radioValue]);

  const fetchProducts = async (radioValue) => {
    try {
      const params = !radioValue ? {} : { params: { category: radioValue } };
      const response = await api.get("/products", params);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const dropDownHandler = (eventKey = "", event = "") => {
    setRadioValue(eventKey);
    document.querySelector("button.dropdown-toggle.btn-danger").innerHTML =
      event.target.innerHTML;
  };

  const OnClickCategory = (eventKey = "", event = "") => {
    setRadioValue(eventKey);
  };

  return (
    <>
      <div className="product-container">
        <div className="category-selector">
          {CategoriesDropdown.map((category, index) => {
            return (
              <div key={index} onClick={() => OnClickCategory(category.value)}>
                {category.name}
              </div>
            );
          })}
        </div>

        <div className="category-selector-dropdown">
          <DropdownButton title="All Products" variant="danger">
            {CategoriesDropdown.map((item, index) => {
              return (
                <Dropdown.Item
                  key={item.value}
                  eventKey={item.value}
                  value={item.value}
                  active={item.value === radioValue}
                  onSelect={dropDownHandler}
                >
                  {item.name}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>

        <div className="product-as-cards">
          {products.map((product, index) => {
            return <CardComponent key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}
