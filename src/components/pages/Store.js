import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

function Store() {
  const items = [
    {
      name: "CrossFit T-Shirt",
      image: "https://via.placeholder.com/300x200",
      description: "High-quality CrossFit T-shirt available in various sizes.",
      price: "$25",
    },
    {
      name: "CrossFit Water Bottle",
      image: "https://via.placeholder.com/300x200",
      description: "Durable and lightweight water bottle to keep you hydrated.",
      price: "$15",
    },
    {
      name: "CrossFit Gym Bag",
      image: "https://via.placeholder.com/300x200",
      description: "Spacious and stylish gym bag for all your workout essentials.",
      price: "$40",
    },
  ];

  return (
    <Container style={{ padding: "2rem 0" }}>
      {/* Store Header */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="poppins-900-main">Welcome to Our Store</h2>
          <p>Explore our exclusive CrossFit merchandise and gear.</p>
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
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Store;
