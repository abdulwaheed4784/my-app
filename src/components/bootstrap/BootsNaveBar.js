import React, { useEffect, useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import BootsTable from "./BootsTable";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const BootsNaveBar = ({ auth, setAuth }) => {
  const { push } = useHistory();

  if (!localStorage.getItem("token")) push("/");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      push("/home");
    }
  }, []);

  const userTable = () => {
    return <BootsTable />;
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {auth === true && <Link to="/home">Home</Link>}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {auth === true && <Link to="/users"> Users {userTable}</Link>}
          </Nav>
          <Nav>
            {auth === true ? (
              <Nav.Link
                onClick={() => {
                  localStorage.removeItem("token");
                  setAuth(false);
                  push("/");
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  SignUp
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootsNaveBar;