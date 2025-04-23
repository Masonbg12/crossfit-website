import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import FreeTrial from "./FreeTrial";
import logo1 from "../logos/CrossFit_logo_black.png";
import logo2 from "../logos/CrossFit_forging_logo.png";

function Footer() {
  return (
    <Container style={{ backgroundColor: "#54595f" }} fluid>
      <Row>
        <Col>
          <Stack gap={3}>
            <Image src={logo1} fluid></Image>
            <Image src={logo2} fluid></Image>
          </Stack>
        </Col>
        <Col className="align-content-center">
          <Stack gap={3} className="align-items-center">
            <Link to="/">Home</Link>
            <Link to="/Schedule">Schedule</Link>
            <Link to="/WOD">WOD</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Store">Store</Link>
            <Link to="/ContactUs">Contact Us</Link>
            <Stack direction="horizontal" gap={4}classname="justify-content-center">
              <Link to="https://www.instagram.com/crossfitxlr8?igsh=MTkyeDljcHk0aDFzcw=="   target="_blank" title="LinkedIn">
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </Link>
              <Link to="https://www.facebook.com/share/14n5xZnNSX/?mibextid=wwXIfr"   target="_blank" title="LinkedIn">
                <FontAwesomeIcon icon={faFacebook} size="2xl" />
              </Link>
            </Stack>
          </Stack>
        </Col>
        <Col xs={6} className="" style={{borderLeft: '4px solid #000'}}>
          <FreeTrial />
        </Col>
      </Row>
      <Row>
        <p>CrossFit XLR8 | 202 Hwy 35 Gregory, TX USA | Phone: 361-444-3316 | Info@crossfitxlr8.com | Copyright © 2025 CrossFit XLR8</p>
      </Row>
    </Container>
  );
}

export default Footer;
