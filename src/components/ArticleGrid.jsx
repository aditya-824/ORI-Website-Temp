import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function ArticleGrid({ articles }) {
    const handleReadMore = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Row xs={1} md={4} className="g-4 my-4 align-items-stretch">
            {articles.map((article, idx) => (
                <Col key={idx} className="h-100">
                    <Card className="article-card" bg="dark" text="light" border="dark">
                        <Card.Body className="d-flex flex-column justify-content-between h-100">
                            <Card.Title>{article.author}</Card.Title>
                            <Card.Text>
                                {article.content}
                            </Card.Text>
                            <Button variant="light" onClick={() => handleReadMore(article.link)}>Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default ArticleGrid;