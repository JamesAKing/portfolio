import './HexagonGraphic.scss';
import React, { useState, useRef, useEffect } from 'react';

function HexagonGraphic() {

    const containerRef = useRef(null);
    const [ isVisible, setIsVisble ] = useState(false);
    const [ animated, setAnimated ] = useState(false); 

    const callbackFunction = entries => {
        const [ entry ] = entries;
        setIsVisble(entry.isIntersecting);
    };

    const options = {
        root : null,
        rootMargin : "0px",
        threshold : 1.0
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef, options])

    return (
        <div className="graphics">
            {/* <div className="graphics__line" ref={containerRef}></div> */}
            <div className={`graphics__line ${isVisible || animated ? "graphics__line--animate" : ""}`} ref={containerRef}></div>
            <div className="graphics__hexagons">
                <div className="graphics__hexagon graphics__hexagon--outer"></div>
                <div className="graphics__hexagon graphics__hexagon--inner"></div>
            </div>
        </div>
    );
    
}

export default HexagonGraphic;