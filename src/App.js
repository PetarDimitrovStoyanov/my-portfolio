import './App.css';
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
    return (
        <div className="App">
            <Header />
            <About />
            <Contact />
        </div>
    );
}

export default App;
