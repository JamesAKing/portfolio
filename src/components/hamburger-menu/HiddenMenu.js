import './HiddenMenu.scss';

function HiddenMenu({ setMenuActive }) {

    return (
        <div className="hidden-menu">
            <button className="hidden-menu__btn" type="button" onClick={() => setMenuActive(false)}>X</button>
        </div>
    );

}

export default HiddenMenu;