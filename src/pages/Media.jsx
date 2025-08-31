import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import ArticleGrid from "../components/ArticleGrid";
import NewsGrid from "../components/NewsGrid";
import Image from "react-bootstrap/Image";

import mediaBanner from "../assets/media-banner.jpg";
import articles from "../components/articleData.js";
import news from "../components/newsData.js";

function Media() {
    return (
        <>
            <Image src={ mediaBanner } alt="Media Banner" fluid className="w-100 mb-4" />
            <Container>
                <h1>Media</h1>
                <h2>Articles</h2>
                <ArticleGrid articles={ articles } />
                <h2>News</h2>
                <NewsGrid images={ news } />
            </Container>
            <Footer />
        </>
    )
}

export default Media;