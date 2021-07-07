import * as React from "react";
import { Button, Form } from "react-bootstrap";
import api from "../../helper/axios_api";
import "./register_page.scss";

type RegisterPageProps = {};
type RegisterPageState = {};

export default class RegisterPage extends React.Component<
  RegisterPageProps,
  RegisterPageState
> {
  constructor(props: RegisterPageProps) {
    super(props);
    this.state = {};
  }

  async handleSubmit(e: Event) {
    e.preventDefault();

    await api.get("https://jsonplaceholder.typicode.com/todos/1");
  }
  render() {
    return (
      <>
        <div className="register-container">
          <div className="register-header">
            <h1>Signup</h1>
            <h5>We do not share your info with anyone.</h5>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              SignUp
            </Button>
          </Form>
        </div>
      </>
    );
  }
}
