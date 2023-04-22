import React from "react";
import Projects from "../../components/sections/projects/Projects";
import Certificates from "../../components/sections/certificates/Certificates";
import Quote from "../../components/sections/quote/Quote";
import About from "../../components/sections/about/About";
import Contact from "../../components/sections/contact/Contact";
import Header from "../../components/sections/header/Header";
import Experience from "../../components/sections/experience/Experience";
import './HomePage.scss';

export default function HomePage() {
    return (
        <div className="pages">
            <Header/>
            <Projects/>
            <Quote/>
            <Certificates/>
            <Experience />
            <About/>
            <Contact/>
        </div>
    );
}
