import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import linkedinLogo from "../assets/linkedin-logo.png";
import instagramLogo from "../assets/instagram-logo.png";
import facebookLogo from "../assets/facebook-logo.png";
import xLogo from "../assets/x-logo.jpg";
import orionLogo from "../assets/orion-logo.png";

function Footer() {
    return (
        <footer className="footer-bar bg-dark text-light py-3 mt-5">
            <Container>
                <Row>
                    <Col xs="auto">
                        <img className="orion-logo" src={orionLogo} alt="Orion Logo" />
                    </Col>
                </Row>
                <Row className="align-items-center mb-2">
                    <Col md={6} className="text-md-start text-center">
                        <p className="mb-1">Contact us</p>
                        <p className="mb-0">contact@orionracingindia.com</p>
                    </Col>
                    <Col md={6} className="text-md-end text-center">
                        <p className="mb-1">Follow us</p>
                        <a href="https://www.instagram.com/orionracingin/" target="_blank" rel="noopener noreferrer" className="mx-1">
                            <img className="social-logo" src={instagramLogo} alt="Instagram Logo" />
                        </a>
                        <a href="https://www.linkedin.com/company/orionracingindia" target="_blank" rel="noopener noreferrer" className="mx-1">
                            <img className="social-logo" src={linkedinLogo} alt="Linkedin Logo" />
                        </a>
                        <a href="https://www.facebook.com/orionracing/" target="_blank" rel="noopener noreferrer" className="mx-1">
                            <img className="social-logo" src={facebookLogo} alt="Facebook Logo" />
                        </a>
                        <a href="https://x.com/OrionRacingIn" target="_blank" rel="noopener noreferrer" className="mx-1">
                            <img className="social-logo" src={xLogo} alt="X Logo" />
                        </a>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col xs="auto">
                        <small>&copy; {new Date().getFullYear()} Orion Racing India</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;