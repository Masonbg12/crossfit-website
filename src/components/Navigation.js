import { Navbar, Nav, Image, Container, Offcanvas } from "react-bootstrap";
import logo from "../logos/CrossFit_logo_black.png";

function Navigation() {
  return (
    // ************ work on desktop spacing **********
    <Navbar expand="md" id="nav-bar">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image src={logo} fluid style={{ width: "10rem", height: "auto" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ width: "75%", backgroundColor: "#415a77" }}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 poppins-700" style={{ fontSize: "1rem" }}>
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
