import './Search.scss';
import Select, {StylesConfig} from "react-select";
import React, {useState, useEffect} from "react";
import {ColourOption} from "../../interface/ColourOption";
import {projects} from "../../data/projects";
import {setCollection, setCollectionInfrastructure, style} from "../../service/searchService";
import {useTranslation} from "react-i18next";

export default function Search(props) {
    const {t} = useTranslation();

    const [selectedFrontEndOptions, setSelectedFrontEndOptions] = useState();
    const [selectedBackEndOptions, setSelectedBackEndOptions] = useState();
    const [selectedOtherOptions, setSelectedOtherOptions] = useState();
    const [selectedInfrastructureOptions, setSelectedInfrastructureOptions] = useState();
    const [text, setText] = useState('');
    let infrastructureOptions = [];
    let frontEndOptions = [];
    let backEndOptions = [];
    let otherOptions = [];

    useEffect(() => {
        setCollection(projects,'technologies-and-tools', 'frontend', frontEndOptions);
        setCollection(projects,'technologies-and-tools', 'backend', backEndOptions);
        setCollection(projects,'technologies-and-tools', 'other', otherOptions);
        setCollectionInfrastructure(projects, 'infrastructures', infrastructureOptions);
    }, [infrastructureOptions, frontEndOptions, backEndOptions, otherOptions]);

    function handleSelectBackEnd(data) {
        setSelectedBackEndOptions(data);
    }

    function handleSelectFrontEnd(data) {
        setSelectedFrontEndOptions(data);
    }

    function handleSelectOther(data) {
        setSelectedOtherOptions(data);
    }

    function handleSelectInfrastructure(data) {
        setSelectedInfrastructureOptions(data);
    }

    const colourStyles: StylesConfig<ColourOption, true> = style;

    const doSearch = () => {
        setText(text);

        const criteria = {
            selectedFrontEndOptions,
            selectedBackEndOptions,
            selectedOtherOptions,
            selectedInfrastructureOptions,
            text
        }

        props.search(criteria);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="search-container">
            <div className="input-wrapper">
                <input
                    className="search-input"
                    onChange={handleInputChange}
                    type="text"
                    value={text}
                    placeholder={t('search.type')}
                />
                <button className="search-button" onClick={doSearch}>{t('search.search')}</button>
            </div>
            <div className="filters">
                <div className="dropdown-container">
                    <span>{t('search.backend')}</span>
                    <Select
                        options={backEndOptions}
                        placeholder={t('search.placeholder-option')}
                        value={selectedBackEndOptions}
                        onChange={handleSelectBackEnd}
                        isSearchable={true}
                        isMulti
                        styles={colourStyles}
                    />
                </div>
                <div className="dropdown-container">
                    <span>{t('search.frontend')}</span>
                    <Select
                        options={frontEndOptions}
                        placeholder={t('search.placeholder-option')}
                        value={selectedFrontEndOptions}
                        onChange={handleSelectFrontEnd}
                        isSearchable={true}
                        isMulti
                        styles={colourStyles}
                    />
                </div>
                <div className="dropdown-container">
                    <span>{t('search.other')}</span>
                    <Select
                        options={otherOptions}
                        placeholder={t('search.placeholder-option')}
                        value={selectedOtherOptions}
                        onChange={handleSelectOther}
                        isSearchable={true}
                        isMulti
                        styles={colourStyles}
                    />
                </div>
                <div className="dropdown-container">
                    <span>{t('search.infrastructures')}</span>
                    <Select
                        options={infrastructureOptions}
                        placeholder={t('search.placeholder-option')}
                        value={selectedInfrastructureOptions}
                        onChange={handleSelectInfrastructure}
                        isSearchable={true}
                        isMulti
                        styles={colourStyles}
                    />
                </div>
            </div>
        </div>
    );
}
