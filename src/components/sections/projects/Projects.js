import React, {useState} from "react";
import './Projects.scss';
import Project from "../../project/Project";

import {projects} from "../../../data/projects.js"
import {useTranslation} from "react-i18next";
import Search from "../../search/Search";

export default function Projects() {
    const {t} = useTranslation();
    let [showProjects, setShowProjects] = useState([...projects]);

    const triggerSearch = (data) => {
        let filteredProjects = [...projects];
        filteredProjects = filterByCriteria(data['selectedFrontEndOptions'], filteredProjects, 'frontend');
        filteredProjects = filterByCriteria(data['selectedBackEndOptions'], filteredProjects, 'backend');
        filteredProjects = filterByCriteria(data['selectedOtherOptions'], filteredProjects, 'other');
        filteredProjects = filterByInfrastructure(data['selectedInfrastructureOptions'], filteredProjects, 'infrastructures');
        filteredProjects = filterByText(filteredProjects, data['text']);
        setShowProjects([...filteredProjects]);
    };

    function filterByText(filteredProjects, text) {

        return (text.trim() !== '')
            ? filteredProjects.filter(project=> project.title.toLowerCase().includes(text.trim().toLowerCase()))
            : filteredProjects;
    }

    function filterByInfrastructure(selected, filteredProjects, type) {
        if (selected && selected.length > 0) {
            selected.forEach(selectedOption => {
                filteredProjects = filterProjectByInfrastructure(filteredProjects, type, selectedOption);
            });
        }
        return filteredProjects;
    }

    function filterProjectByInfrastructure(filteredProjects, type, selectedOption) {
        return filteredProjects
            .filter(project => project[`${type}`]
                .map(project => project.name)
                .includes(selectedOption.label)
            );
    }

    function filterByCriteria(selected, filteredProjects, subType) {
        if (selected && selected.length > 0) {
            selected.forEach(selectedOption => {
                filteredProjects = filterProjectByCriteria(filteredProjects, subType, selectedOption);
            });
        }
        return filteredProjects;
    }

    function filterProjectByCriteria(filteredProjects, subType, selectedOption) {
        return filteredProjects
            .filter(project => project['technologies-and-tools'][`${subType}`]
                .map(project => project.name)
                .includes(selectedOption.label)
            );
    }

    return (
        <section className="projects" id="my-projects">
            <div className="container">
                <h1 className="sub-title">{t('header.recent-projects')}</h1>
                <Search search={triggerSearch}/>
                <div className="project-list">
                    {showProjects.length > 0
                        ? showProjects.map(project => <Project project={project} key={project.id}/>)
                        : ''}
                    {showProjects.length === 0 ? <span className="no-match">{t('search.no-projects')}</span> : ''}
                </div>
            </div>
        </section>
    );
}
