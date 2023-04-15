import React, {useState} from "react";
import './Project.scss';
import link from "../../assets/icons/up-right-from-square-solid.svg";
import info from "../../assets/icons/info-solid.svg";
import Modal from "../modal/Modal";

export default function Project(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className="project">
            <img src={require(`../../assets/projects/${props.imgFileName}`)} alt="portfolio" className="project-img"/>
            <div className="layer">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-about">{props.about}</p>
                <div className="button-container">
                    {props.url.trim() !== '' ?
                        <a href={props.url} className="project-reference" target="_blank">
                            <img src={link} alt="link" className="link-icon"/>
                        </a> :
                        ''}
                    <div className="read-more">
                        <img src={info} alt="i" className="info" onClick={toggleModal}/>
                    </div>
                </div>
            </div>
            {isOpen ? <Modal toggleModal={toggleModal} projectId={props.id}/> : ''}
        </article>
    );
}
