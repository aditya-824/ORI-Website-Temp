import Footer from "../components/Footer";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import CarsGrid from "../components/CarsGrid";

import workshopBanner from "../assets/workshop-banner.jpg";
import cars from "../components/cars.js";

function Workshop() {
    return (
        <>
            <main>
                <Image className="workshop-image-container" fluid src={ workshopBanner } alt="Orion Racing India Workshop" />
                <Container className="cars-grid">
                    <h1>Our Cars</h1>
                    <CarsGrid cars={cars} />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Workshop;