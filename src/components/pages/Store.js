import { Container, Row, Col, Card, Alert } from "react-bootstrap";

function Store() {
  const items = [
    {
      name: "CrossFit T-Shirt",
      image: "/media/store/t-shirt.jpg",
      description: "long sleeve available.",
      price: "$20-35"
    },
    {
      name: "CrossFit Crop Top",
      image: "/media/store/crop.jpg",
      price: "$25"
    },
    {
      name: "CrossFit Hoodie",
      image: "media/store/jacket.jpg",
      price: "$25-50"
    },
    {
      name: "CrossFit Shorts",
      image: "/media/store/shorts.jpg",
      description: "leggings available.",
      price: "$20-40"
    },
    {
      name: "CrossFit Gear",
      image: "/media/store/various.jpg"
    },
  ];

  return (
    <Container fluid style={{ padding: "none", backgroundColor: "var(--bg-light1)" }}>
      {/* Store Header */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="mt-4 poppins-900-main"  style= {{color: "var(--bg-black)"}}>Welcome to Our Store</h2>
          <p  style= {{color: "var(--bg-black)"}}>All items are available in different styles, colors, and sizes in-gym.</p>
        </Col>
      </Row>

      {/* Alert Section */}
      <Row className="mb-4">
        <Col>
          <Alert
            variant="info"
            className="text-center"
            style={{
              backgroundColor: "var(--bg-dark)",
              color: "var(--bg-black)",
              border: "none",
            }}
          >
            Looking for custom orders?{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.themarlinoutlet.com/xlr8"
              className="alert-link"
              style={{ color: "var(--bg-black)", textDecoration: "underline" }}
            >
              Click here
            </a>{" "}
            to place your custom order today!
          </Alert>
        </Col>
      </Row>

      {/* Store Items */}
      <Row>
        {items.map((item, index) => (
          <Col xs={12} md={4} className="mb-4" key={index}>
            <Card className="store-card" style= {{ backgroundColor: "var(--bg-dark)", color: "var(--bg-black)" }}>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><strong>{item.price}</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Store;
