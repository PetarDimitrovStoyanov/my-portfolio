import './App.css';
import Header from "./sections/header/Header";
import Contact from "./sections/contact/Contact";
import About from "./sections/about/About";
import Certificates from "./sections/certificates/Certificates";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";
import Quote from "./sections/quote/Quote";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Certificates />
            <Quote />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
