import React from "react";
import { Navbar } from "react-bootstrap";
function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
          <h5 style={{ color: "white" }}>TDS Telkom</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    </div>
  );
}
export default Header;
