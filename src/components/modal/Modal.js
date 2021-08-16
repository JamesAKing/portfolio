import './Modal.scss';

function Modal({ children, deactivate }) {
    return (
        <div className="modal__container">
            <div className="modal__close" onClick={deactivate}>X</div>
            {children}
        </div>
    );
}

export default Modal;