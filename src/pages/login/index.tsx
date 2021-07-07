import * as React from "react";
import { Button, Form } from "react-bootstrap";
import api from "../../helper/axios_api"
import "./login_page.scss";

interface LoginPageProps {
    history: any;
}

const LoginPage: React.FC<LoginPageProps> = ({history}): React.ReactElement => {

    const handleSubmit = async (e: Event) =>{
        e.preventDefault();

        await api.get('https://jsonplaceholder.typicode.com/todos/1')
    }

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <h5>Get access to your Orders. Wishlist and Recommendation</h5>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
