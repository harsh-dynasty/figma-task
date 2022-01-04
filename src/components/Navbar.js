import React from "react";
import {
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Col,
} from "react-bootstrap";
import logo from "../images/logo.jpg";
const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="xl">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="auto"
          height="50px"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form inline className="">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <NavDropdown title="Create a new Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
