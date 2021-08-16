import './Modal.scss';

function Modal({ children }) {
    return (
        <div className="modal__container">
            {children}
        </div>
    );
}

export default Modal;