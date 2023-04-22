import './App.css';
import Footer from "./components/sections/footer/Footer";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import i18n from '../src/service/translations/i18n';
import {I18nextProvider} from "react-i18next";
import ScrollToTopButton from "./components/scroll-top-button/ScrollToTopButton";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/NotFound/NotFound"
import ProjectPage from "./pages/project/ProjectPage";

import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/projects/:id" element={<ProjectPage/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                <Footer/>
                <ToastContainer/>
                <ScrollToTopButton/>
            </div>
        </I18nextProvider>
    );
}

export default App;
