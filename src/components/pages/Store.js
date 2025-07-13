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
    <Container style={{ padding: "2rem 0" }}>
      {/* Store Header */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="poppins-900-main">Welcome to Our Store</h2>
          <p>All items are available in different styles, colors, and sizes in-gym.</p>
        </Col>
      </Row>

      {/* Alert Section */}
      <Row className="mb-4">
        <Col>
          <Alert variant="info" className="text-center">
            Looking for custom orders? <a target="_blank" rel="noopener noreferrer" href="http://www.themarlinoutlet.com/xlr8" className="alert-link">Click here</a> to place your custom order today!
          </Alert>
        </Col>
      </Row>

      {/* Store Items */}
      <Row>
        {items.map((item, index) => (
          <Col xs={12} md={4} className="mb-4" key={index}>
            <Card>
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
