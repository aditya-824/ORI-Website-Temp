import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Workshop from "./pages/Workshop.jsx"
import Sponsors from "./pages/Sponsors.jsx"
import SupportUs from "./pages/SupportUs.jsx"
import Media from "./pages/Media.jsx"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/ORI-Website-Temp/" element={<Header />}>
          <Route exact path="/ORI-Website-Temp/" element={<Home />} />
          <Route path="/ORI-Website-Temp/about" element={<AboutUs />} />
          <Route path="/ORI-Website-Temp/workshop" element={<Workshop />} />
          <Route path="/ORI-Website-Temp/sponsors" element={<Sponsors />} />
          <Route path="/ORI-Website-Temp/supportus" element={<SupportUs />} />
          <Route path="/ORI-Website-Temp/media" element={<Media />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
