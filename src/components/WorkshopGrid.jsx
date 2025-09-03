
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function WorkshopGrid({ workshopData }) {
    const [shownImages, setShownImages] = useState(Array(workshopData.length).fill(false));

    const handleToggleImage = (idx) => {
        setShownImages((prev) => {
            const updated = [...prev];
            updated[idx] = !updated[idx];
            return updated;
        });
    };

    return (
        <Row xs={1} md={2} className="g-4">
            {workshopData.map((car, idx) => (
                <Col key={idx}>
                    <Card className="car-card" bg="dark" text="light" border="dark">
                        <Card.Img
                            variant="top"
                            src={shownImages[idx] ? car.team : car.image}
                            alt={shownImages[idx] ? `${car.name} Team` : car.name}
                        />
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>{car.name}</Card.Title>
                                    <Card.Text>
                                        {car.year}
                                    </Card.Text>
                                </Col>
                                <Col className="text-end mt-2">
                                    <Button variant="light" onClick={() => handleToggleImage(idx)}>
                                        {shownImages[idx] ? "View Car" : "View Team"}
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default WorkshopGrid;