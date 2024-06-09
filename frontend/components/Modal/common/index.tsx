'use client'

import { useRouter } from "next/navigation";
import style from "./style.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import modalStyle from '../modal.module.scss';

interface TopProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    color?: string;
}

function Top({ children, icon, color }: TopProps) {
    const router = useRouter();

    const handleClose = () => {
        router.push('/')
    }

    return (
        <div className={style.top}>
            <div className={style.left}>
                <div className={style.iconContainer} style={{ backgroundColor: `${color}35`, color }}>{icon}</div>
                <span>{children}</span>
            </div>
            <button className={style.closeButton} onClick={() => handleClose()}>
                <IoCloseSharp />
            </button>
        </div>
    )
}

function Backdrop({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    const handleClose = () => {
        router.push('/')
    }

    return (
        <div onClick={handleClose} className={style.backdrop}>
            {children}
        </div>
    );
}

function Button({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return (
        <button onClick={onClick} className={modalStyle.submit}>
            {children}
        </button>
    );
}

function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    );
}

Modal.Backdrop = Backdrop;
Modal.Top = Top;
Modal.Button = Button;

export default Modal;