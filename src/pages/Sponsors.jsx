import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import SponsorsGrid from "../components/SponsorsGrid";

import sponsors from "../components/sponsors.js";

function Sponsors() {
    return (
        <>
            <main>
                <Container className="sponsors-intro">
                    <h1>Our Sponsors</h1>
                    <p>We at Orion Racing India strive day and night to break all the barriers and continuously think of new innovative methods to shape the automobile industry. Participating in competitions like Formula Student Germany and Spain helps us to work harder and dream bigger. Your company can become a part of our incredible journey, and you can share the pride of supporting and molding a team representing the country on a global scale.</p>
                </Container>
                <SponsorsGrid sponsors={sponsors} />
            </main>
            <Footer />
        </>
    )
}

export default Sponsors;