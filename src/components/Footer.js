import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import FreeTrial from "./FreeTrial";
import logo1 from "../logos/CrossFit_logo_black.png";
import logo2 from "../logos/CrossFit_forging_logo.png";

function Footer() {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center" id="footer-logos" style={{ gap: '1rem' }}>
          <Image src={logo1} style={{ width: "8rem", height: "auto" }}fluid />
          <Image src={logo2} style={{ width: "8rem", height: "auto" }} fluid />
        </Col>
        <Col>
          <Row>
            <Col>
              <Stack gap={1}>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/Schedule">Schedule</Link>
                <Link className="link" to="/WOD">WOD</Link>
                <Link className="link" to="/AboutUs">About Us</Link>
                <Link className="link" to="/ContactUs">Contact Us</Link>
              </Stack>
            </Col>
            <Col className="d-flex flex-column">
              <Link
                className="link" to="https://www.instagram.com/crossfitxlr8?igsh=MTkyeDljcHk0aDFzcw=="
                target="_blank"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ marginRight: "0.3rem" , marginTop: "0.5rem"}} />
                <span className="d-none d-md-inline">Join us on Instagram</span>
              </Link>
              <Link
                className="link" to="https://www.facebook.com/share/14n5xZnNSX/?mibextid=wwXIfr"
                target="_blank"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="2xl" style={{ marginRight: "0.3rem", marginTop: "0.5rem"}} />
                <span className="d-none d-md-inline">Join us on Facebook</span>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center" style={{ borderLeft: "4px solid #000" }}>
          <FreeTrial />
        </Col>
      </Row>
      <Row 
        className="d-flex text-center"
      >
        <p style={{ paddingTop: "1rem"}}>
          CrossFit XLR8 | 202 Hwy 35 Gregory, TX USA | Phone: 361-290-6969 | info@crossfitxlr8.com |
          Copyright © 2025 CrossFit XLR8
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
