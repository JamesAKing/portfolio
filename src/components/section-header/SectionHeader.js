import './SectionHeader.scss';

function SectionHeader({ heading, alt }) {

    return (
        <header className={`section-header ${alt ? "section-header--alt" : null}`}>
            <h2 className="section-header__heading">{heading.toUpperCase()}</h2>
        </header>
    );
    
}

export default SectionHeader;