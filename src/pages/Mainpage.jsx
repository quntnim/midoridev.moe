import React, { useEffect, useState, useRef } from "react";
import "../styles/Mainpage.css";

const Mainpage = () => {
    const containerRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);

    const checkScroll = () => {
        if (!containerRef.current) return;

        const scrollHeight = containerRef.current.scrollTop;
        const sectionHeight = window.innerHeight;
        const currentSection = Math.floor(scrollHeight / sectionHeight);

        setActiveDot(currentSection);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handler = (event) => {
            const delta = event.deltaY;

            container.scrollBy({
                top: delta,
                behavior: "smooth",
            });

            event.preventDefault();
        };

        container.addEventListener("wheel", handler);
        container.addEventListener('scroll', checkScroll);

        return () => {
            container.removeEventListener("wheel", handler);
            container.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return (
        <div className="scroll-container" ref={containerRef}>
            <div className="dot-container">
                <div
                    className={`dot ${activeDot === 0 ? 'active' : ''}`}
                    onClick={() => document.getElementById("section-0").scrollIntoView({ behavior: "smooth" })}
                >
                </div>
                <div
                    className={`dot ${activeDot === 1 ? 'active' : ''}`}
                    onClick={() => document.getElementById("section-1").scrollIntoView({ behavior: "smooth" })}
                >
                </div>
                <div
                    className={`dot ${activeDot === 2 ? 'active' : ''}`}
                    onClick={() => document.getElementById("section-2").scrollIntoView({ behavior: "smooth" })}
                >
                </div>
            </div>
            <div className="scroll-section" id="section-0">
                <div className="cover">
                    <p className="title">ASDF</p>
                </div>
            </div>
            <div className="scroll-section" id="section-1">
                <div className="cover">
                    <p className="title">ASDF2</p>
                </div>
            </div>
            <div className="scroll-section" id="section-2">
                <div className="cover">
                    <p className="title">ASDF3</p>
                </div>
            </div>
        </div>
    );
};

export default Mainpage;