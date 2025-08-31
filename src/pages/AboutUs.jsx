import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Timeline from "../components/Timeline";

import bella from "../assets/about-us/bellatrix-on-court.jpg"
import timelineData from "../components/timelineData.js";

function AboutUs() {
    return (
        <>
            <main>
                <Image src={bella} alt="Bellatrix Prototype on basketball court" fluid />
                <Container className="about">
                    <h1>About Us</h1>
                    <p>As we’ve heard in a famous Hindi Film, "Don’t study to be successful, study to be able. Success will have to follow." This is exactly what happened in 2006, when an ambitious bunch of engineering students from our college, set out on this ambitious journey, to defy all odds, break the shackles of this monotonous education system, and make themselves able to compete at the international level. With the right tools in their hands, fire in their hearts, and with a battered rickshaw engine in a cramped workshop, they began their search for success. And the rest is history.</p>
                    <Timeline title="Our Journey" events={timelineData} />
                </Container>
            </main>
        </>
    );
}

export default AboutUs;