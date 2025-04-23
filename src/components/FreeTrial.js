import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FreeTrial = () => {
    return (
        <Card style={{ color: "#000",}}>
            <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>Start Your Free Trial</Card.Title>
                <Card.Text>
                    Join us today and get a free trial to experience our amazing CrossFit programs. No commitments, just results!
                </Card.Text>
                <Button variant="primary" onClick={() => alert('Free Trial Started!')}>
                    Start Now
                </Button>
            </Card.Body>
        </Card>
    );
};

export default FreeTrial;