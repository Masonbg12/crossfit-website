import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import logo1 from "../logos/CrossFit_logo.png";
import logo2 from "../logos/CrossFit_forging_logo.png";

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Stack gap={3}>
            <Image src={logo1} fluid></Image>
            <Image src={logo2} fluid></Image>
          </Stack>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Footer;
