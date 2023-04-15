import './App.css';
import Header from "./sections/header/Header";
import Contact from "./sections/contact/Contact";
import About from "./sections/about/About";
import Certificates from "./sections/certificates/Certificates";
import Projects from "./sections/projects/Projects";
import Footer from "./sections/footer/Footer";
import Quote from "./sections/quote/Quote";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import i18n from '../src/service/translations/i18n';
import {I18nextProvider} from "react-i18next";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <div className="App">
                <Header/>
                <About/>
                <Certificates/>
                <Quote/>
                <Projects/>
                <Contact/>
                <Footer/>
                <ToastContainer/>
            </div>
        </I18nextProvider>
    );
}

export default App;
