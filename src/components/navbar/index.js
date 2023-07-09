import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";
import logoImage from "../../assets/logo.svg";

function NavbarComponent(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light className="navbar-container" expand="md">
        <NavbarBrand href="/" style={{ color: "black" }}>
          <img
            src={logoImage}
            alt="Logo"
            height="30"
            className="navbar-brand-logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse
          navbar
          className="navbar-section"
          style={{ marginRight: "150px" }}
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/our-seriveces/" style={{ color: "black" }}>
                Our Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/why-us/" style={{ color: "black" }}>
                Why Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/testimonial/" style={{ color: "black" }}>
                Testimonial
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cart" style={{ color: "black" }}>
                Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="FAQ" style={{ color: "black" }}>
                FAQ
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Offcanvas toggle={toggleNavbar} isOpen={collapsed} direction="end">
          <OffcanvasHeader toggle={toggleNavbar} style={{ color: "black" }}>
            <img src={logoImage} alt="Logo" height="30" />
          </OffcanvasHeader>
          <OffcanvasBody>
            <Nav className="ml-auto navbar-section" navbar>
              <NavItem>
                <NavLink href="/our-seriveces/" style={{ color: "black" }}>
                  Our Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/why-us/" style={{ color: "black" }}>
                  Why Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/testimonial/" style={{ color: "black" }}>
                  Testimonial
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cart" style={{ color: "black" }}>
                  Cart
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="FAQ" style={{ color: "black" }}>
                  FAQ
                </NavLink>
              </NavItem>
            </Nav>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
