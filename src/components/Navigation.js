import { Nav, Image } from "react-bootstrap";
import logo from "../logos/CrossFit_logo_black.png";

function Navigation() {
  return (
    <Nav id="nav-bar">
      <Nav.Item>
        <Image src={logo} fluid />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Schedule">Schedule</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/WOD">WOD</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/AboutUs">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Store">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
