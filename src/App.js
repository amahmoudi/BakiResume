import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Aboutus from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import data from './resumeData';
// import i18n (needs to be bundled ;))
import './I18n/i18n';

function App() {
    return (
        <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
            <LanguageSwitcher/>
            <Header />
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/projects" element={<Projects data={data.projectsList} />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/contactus" element={<Contact />} />
                </Routes>
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default App