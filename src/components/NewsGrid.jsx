import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function NewsGrid({ images }) {
    // Split images into 3 columns
    const columns = [[], [], []];
    images.forEach((img, idx) => {
        columns[idx % 3].push(img);
    });

    // Reverse each column for bottom-up fill
    const reversedColumns = columns.map(col => [...col].reverse());

    return (
        <Row className="my-4">
            {reversedColumns.map((colImages, colIdx) => (
                <Col key={colIdx} className="d-flex flex-column justify-content-end" style={{ minHeight: "400px" }}>
                    {colImages.map((imgSrc, imgIdx) => (
                        <Image src={imgSrc} key={imgIdx} fluid className="mb-2" />
                    ))}
                </Col>
            ))}
        </Row>
    );
}

export default NewsGrid;
