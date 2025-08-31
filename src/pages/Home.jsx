import Footer from "../components/Footer";
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

import pegasusCovered from "../assets/pegasus-covered.png";
import pegasusTwo from "../assets/pegasus2.0.jpg";
import ori2017 from "../assets/2017.jpg";

function Home() {
    return (
        <>
            <main>
                <div className="image-container">
                    <Image className="hero-image" src={pegasusCovered} alt="Pegasus prototype under wrap" fluid />
                    <h1 className="athena-overlay">athena</h1>
                </div>
                <Container>
                    <Row>
                        <Col className="justify-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></Col>
                        <Col>
                            <Carousel fade>
                                <Carousel.Item>
                                    <Image src={pegasusTwo} alt="Pegasus 2.0" fluid />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={ori2017} alt="ORI 2017" fluid />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Home;