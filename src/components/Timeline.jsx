import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image"

function Timeline({ events, title }) {
    return (
        <Container className="timeline">
            {title && <h2 className="mb-4">{title}</h2>}
            {events.map((event, idx) => (
                <Row key={idx} className="mb-3 position-relative">
                    <Col>
                        <span className="timeline-link-line">_____</span>
                        <h1 className="timeline-date">{event.year}</h1>
                        <h4 className="timeline-event-title mb-2">{event.event}</h4>
                    </Col>
                    <Col>
                        <Image src={event.image} alt={event.event} className="timeline-event-img" />
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default Timeline;