import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { ModalLogout } from "../../heroes/components/ModalLogout";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavbarHero = () => {
  const { user } = useContext(AuthContext);

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            className="text-danger fs-3 animate__animated animate__heartBeat partnerships"
            to="/"
          >
            Partnerships
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-danger"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-light" as={Link} to="/marvel">
                Marvel
              </Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/dc">
                DC
              </Nav.Link>
              <Nav.Link className="text-light" as={Link} to="/search">
                Search
              </Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-end contentUser">
              <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-danger mx-3">
                  {user?.name}
                </span>
                <button
                  onClick={() => setModalShow(true)}
                  className="nav-item text-light nav-link btn btn-outline-danger"
                >
                  Logout
                </button>
              </ul>
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-end contentUser"
          >
            <Nav className="me-auto">
              <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-danger mx-3">
                  {user?.name}
                </span>
                <button
                  onClick={() => setModalShow(true)}
                  className="nav-item text-light nav-link btn btn-outline-danger"
                >
                  Logout
                </button>
              </ul>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <ModalLogout show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
