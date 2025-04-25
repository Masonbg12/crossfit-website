import { Navbar, Nav, Image, Container, Offcanvas } from "react-bootstrap";
import logo from "../logos/CrossFit_logo_black.png";

function Navigation() {
  return (
    <Navbar bg="#54595f" expand="md" id="nav-bar" style={{borderBottom: '4px solid #000'}}>
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            src={logo}
            fluid
            className="logo"
            style={{ width: "150px", height: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ width: "75%", backgroundColor: "#54595f"  }}
        >
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Schedule">Schedule</Nav.Link>
              <Nav.Link href="/WOD">WOD</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/Store">Store</Nav.Link>
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
