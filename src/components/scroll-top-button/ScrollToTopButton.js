import React, { useState, useEffect, useRef }  from 'react';
import './ScrollToTopButton.scss';

export default function ScrollToTopButton() {
    const buttonRef = useRef();

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 100) {
            buttonRef.current.style.display = "grid";
        } else {
            buttonRef.current.style.display = "none";
        }

        let max = document.documentElement.scrollHeight - window.innerHeight;
        let percent = Math.round((scrollPosition / max) * 100);
        buttonRef.current.style.background = `conic-gradient(#ff004f ${percent}%, #d7d7d7 ${percent}%)`
    }, [scrollPosition])

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div id="progress" ref={buttonRef}>
            <span id="progress-value" onClick={scrollToTop}>
                &#x1F815;
            </span>
        </div>
    );
}
