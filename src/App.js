import './App.css';
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Certificates from "./components/certificates/Certificates";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Quote from "./components/quote/Quote";

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
