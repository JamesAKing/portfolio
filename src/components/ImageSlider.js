import './ImageSlider.scss';
import { useState } from 'react';
import sliderData from '../assets/images/placeholder-images';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';


function ImageSlider() {

    const [ current, setCurrent] = useState(0);

    const prevSlide = () => {
        if (current === 0) return setCurrent(sliderData.length - 1);
        setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === sliderData.length - 1) return setCurrent(0);
        setCurrent(current + 1)
    };    
    
    return (
        <>
            <h1>CAROUSEL DEMO</h1>
            <section className="slider">
                <FaArrowAltCircleLeft className="arrow arrow__left" onClick={prevSlide} />
                <FaArrowAltCircleRight className="arrow arrow__right" onClick={nextSlide} />

                <img className="slider__image" src={sliderData[current].image} alt="image" />
            </section>
            <ul className="slider__index">
                {sliderData.map((_slide, index) => {
                    return index === current ? 
                        <li className="slider__item slider__item--active"></li> :
                        <li className="slider__item slider__item--inactive" onClick={() => setCurrent(index)}></li>
                })}
            </ul>
        </>
        
    );
}

export default ImageSlider;