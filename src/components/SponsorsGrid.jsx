import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";

function SponsorsGrid({ sponsors }) {
    const rows = [];
    for (let i = 0; i < sponsors.length; i += 4) {
        rows.push(sponsors.slice(i, i + 4));
    }
    return (
        <Container>
            {rows.map((rowSponsors, rowIdx) => (
                <Row key={rowIdx}>
                    {rowSponsors.map((sponsor, colIdx) => (
                        <Col key={colIdx} md={3} className="sponsor-col">
                            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                <img src={sponsor.logo} alt={`Logo of ${sponsor.name}`} className="sponsor-logo" />
                            </a>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );
}

export default SponsorsGrid;