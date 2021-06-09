import './HexagonGraphic.scss';

function HexagonGraphic() {

    return (
        <div className="graphics">
            <div className="graphics__line"></div>
            <div className="graphics__hexagons">
                <div className="graphics__hexagon graphics__hexagon--outer"></div>
                <div className="graphics__hexagon graphics__hexagon--inner"></div>
            </div>
        </div>
    );
    
}

export default HexagonGraphic;