import React from "react";
import './Project.scss';
import link from "../../assets/icons/up-right-from-square-solid.svg";


export default function Project(props) {
    return (
        <article className="project">
            <img src={require(`../../assets/projects/${props.imgFileName}`)} alt="portfolio"/>
            <div className="layer">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-about">{props.about}</p>
                <a href="#" className="project-reference">
                    <img src={link} alt="link" className="link-icon"/>
                </a>
            </div>
        </article>
    );
}
