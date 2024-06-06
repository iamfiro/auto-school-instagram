import style from "./style.module.scss";

function Backdrop({ onClick, children }: { onClick?: () => void, children: React.ReactNode }) {
    return (
        <div onClick={onClick} className={style.backdrop}>
            {children}
        </div>
    );
}

function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.modal}>
            {children}
        </div>
    );
}

Modal.Backdrop = Backdrop;

export default Modal;