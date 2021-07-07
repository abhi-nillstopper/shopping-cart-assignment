import React, { useContext } from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import { Image, Navbar, Nav, Button, Container } from "react-bootstrap";
import { UserContext } from "../../user-context";
import Logo_Big from "../../../static/images/logo_2x.png";
import Logo from "../../../static/images/logo.png";
import Cart from "../../../static/images/cart.svg";
import "./navigation_bar.scss";

export default function NavigationBar(props) {
  const history = useHistory();
  const { isLoggedIn, setIsLoggedIn, numOfItems, setNumOfItems } =
    useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    history.push("/login");
  };

  return (
    <>
      <div className="top-navigation-bar">
        <Navbar expand="lg">
          <span className="main-app-logo">
            <Link to="/">
              <Image src={Logo_Big} />
            </Link>
          </span>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <NavLink activeClassName="active-nav-link" to="/" exact>
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink activeClassName="active-nav-link" to="/products">
                  products
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="user-controls">
          {isLoggedIn ? (
            <Button
              className="logout-btn"
              variant="danger"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login">Sign In</Link> &nbsp;
              <Link to="/register">Register</Link>
            </>
          )}

          <div className="cart-svg">
            <Image src={Cart} />
            {numOfItems}&nbsp;items
          </div>
        </div>
      </div>
      <Container className="page-content" fluid>
        {props.children}
      </Container>
    </>
  );
}
