import * as React from "react";
import { Image, Button, Alert } from "react-bootstrap";
import { UserContext } from "../../user-context";
import "./card.scss";

interface CardProps {
  product: { [key: string]: any };
}

const Card: React.FC<CardProps> = (props): React.ReactElement => {
  const { imageURL, description, price, name } = props.product;

  const [showAlert, setShowAlert] = React.useState(false);
  const [alertVariant, setAlertVariant] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");

  const { numOfItems, setNumOfItems, cartItems, setCartItems } =
    React.useContext(UserContext);

  const handleBuy = () => {
    let user_cart_items: any[] = JSON.parse(
      localStorage.getItem("user_cart_items")
    );
    const isItemPresent =
      user_cart_items.filter((obj: any) => obj.name === name).length > 0
        ? true
        : false;

    if (!isItemPresent) {
      let updatedCart = [...cartItems, { name, imageURL, price }];
      localStorage.setItem("numOfProductsInCart", numOfItems + 1);
      localStorage.setItem("user_cart_items", JSON.stringify(updatedCart));
      setNumOfItems(parseInt(numOfItems) + 1);
      setCartItems(updatedCart);

      setAlertVariant("success");
      setAlertMessage("Item added in cart successfully");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1000);
    } else {
      setAlertVariant("danger");
      setShowAlert(true);
      setAlertMessage("Item already in cart");
      setTimeout(() => setShowAlert(false), 1000);
    }
  };

  return (
    <>
      <div className="card-container">
        <h6>{name}</h6>
        <Image src={imageURL} />
        <div className="card-description">{description}</div>

        <div className="card-bottom">
          <span>MRP Rs. {price}</span>
          <Button variant="danger" onClick={handleBuy}>
            Buy Now
          </Button>
        </div>
      </div>
      {showAlert && (
        <div className="alert-container">
          <Alert variant={alertVariant}>
            <p>{alertMessage}</p>
          </Alert>
        </div>
      )}
    </>
  );
};

export default Card;
