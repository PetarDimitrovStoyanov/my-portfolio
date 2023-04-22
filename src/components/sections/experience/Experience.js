import './Experience.scss';
import React, {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";

export default function Experience() {
    const containerRef = useRef();
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef && containerRef.current) {
                return;
            }
            const items = containerRef.current.querySelectorAll(".work");

            const newVisibleItems = [];
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const rect = item.getBoundingClientRect();

                if (rect.top - 100 >= 0 && rect.bottom - 100 <= window.innerHeight) {
                    newVisibleItems.push(item);
                }
            }

            if (newVisibleItems[0]) {
                Array.from(document.querySelectorAll('.work')).forEach(element => {
                    element.classList.remove('observed');
                })
                newVisibleItems[0].classList.add('observed');
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="experience-container" id="experience">
            <h2 className='experience-title'>{t('header.experience')}</h2>
            <section className="experience-wrapper" ref={containerRef}>
                <div className="line">
                    <div className="enko work">
                        <h3 className="work-title">{t('experience.enko.name')}</h3>
                        <p>{t('experience.enko.date')}</p>
                        <p className="position">{t('experience.enko.position')}</p>
                        <p className="description">
                            {t('experience.enko.description')}
                        </p>
                    </div>
                </div>
                <div className="line">
                    <div className="enko work">
                        <h3 className="work-title">{t('experience.enko-2.name')}</h3>
                        <p>{t('experience.enko-2.date')}</p>
                        <p className="position"><span className="promoted">{t('experience.enko-2.promoted')}</span> {t('experience.enko-2.position')}</p>
                        <p className="description">
                            {t('experience.enko-2.description')}
                        </p>
                    </div>
                </div>
                <div className="line">
                    <div className="softuni work">
                        <h3>{t('experience.softuni.name')}</h3>
                        <p>{t('experience.softuni.date')}</p>
                        <p className="position">{t('experience.softuni.position')}</p>
                        <p className="description">
                            {t('experience.softuni.description')}
                        </p>
                    </div>
                </div>
                <div className="line">
                    <div className="modis work">
                        <h3>{t('experience.akkodis.name')}</h3>
                        <p>{t('experience.akkodis.date')}</p>
                        <p className="position">{t('experience.akkodis.position')}</p>
                        <p className="description">
                            {t('experience.akkodis.description')}
                        </p>
                    </div>
                </div>
                <div className="line last">
                    <div className="modis work">
                        <h3>{t('experience.akkodis1.name')}</h3>
                        <p>{t('experience.akkodis1.date')}</p>
                        <p className="position"><span className="promoted">{t('experience.akkodis1.promoted')}</span> {t('experience.akkodis1.position')}</p>
                        <p className="description">
                            {t('experience.akkodis1.description')}
                        </p>
                    </div>
                </div>
            </section>
        </div>

    );
}
