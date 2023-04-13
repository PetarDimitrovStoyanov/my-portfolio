import './App.css';
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Certificates />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
